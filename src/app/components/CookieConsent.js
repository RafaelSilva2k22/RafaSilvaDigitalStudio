"use client"; 
import { useState, useEffect } from "react";
import "../styles/cookie-consent.css";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    // Exibe o banner apenas se o consentimento ainda não foi dado
    if (!consent) {
      const handleInteraction = () => {
        setShowBanner(true);
        // Remove os listeners após a interação
        window.removeEventListener("scroll", handleInteraction);
        window.removeEventListener("click", handleInteraction);
      };

      window.addEventListener("scroll", handleInteraction);
      window.addEventListener("click", handleInteraction);

      // Cleanup caso o componente seja desmontado antes da interação
      return () => {
        window.removeEventListener("scroll", handleInteraction);
        window.removeEventListener("click", handleInteraction);
      };
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="cookie-banner" id="banner">
        <p>
          Este site utiliza cookies para melhorar sua experiência. Ao continuar
          navegando, você concorda com o uso de cookies.
        </p>
        <button id="button" onClick={handleAccept}>
          Aceitar
        </button>
      </div>
    )
  );
}