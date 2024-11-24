"use client";

import { useState, useEffect } from "react";
import "../styles/cookie-consent.css";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      const handleInteraction = () => {
        setShowBanner(true);
        window.removeEventListener("scroll", handleInteraction);
        window.removeEventListener("click", handleInteraction);
      };

      window.addEventListener("scroll", handleInteraction, { once: true });
      window.addEventListener("click", handleInteraction, { once: true });

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
      <div
        className="cookie-banner"
        id="banner"
        role="dialog"
        aria-live="polite"
        aria-label="Aviso de cookies"
      >
        <p>
          Este site utiliza cookies para melhorar sua experiência. Ao continuar
          navegando, você concorda com o uso de cookies.
        </p>
        <button id="button" onClick={handleAccept} aria-label="Aceitar cookies">
          Aceitar
        </button>
      </div>
    )
  );
}
