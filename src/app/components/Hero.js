"use client";
import "../styles/hero.css"; // Importa o arquivo CSS para o HeroSection
import { CiDesktopMouse2 } from "react-icons/ci";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <h1 className="hero-title">
        Crie um Site Profissional e Tenha Sucesso Online
      </h1>
      <h2 className="hero-subtitle">
        Tenha um site moderno, responsivo e otimizado para atrair mais clientes
        e fortalecer sua presença digital.
      </h2>
      <Button
        href="/contact"
        aria-label="Ir para a seção de contato"
        text="Crie seu Site Agora"
      />
      <div className="mouse-icon-container">
        <CiDesktopMouse2 className="mouse-icon" />
      </div>
    </section>
  );
};

export default HeroSection;
