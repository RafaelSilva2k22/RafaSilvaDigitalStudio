import '../styles/hero.css'; // Importa o arquivo CSS para o HeroSection
import { CiDesktopMouse2 } from "react-icons/ci";
import Button from './Button';

const HeroSection = () => {
    return (
        <section className="hero-container">
            <h1 className="hero-title">Transforme sua Presença Digital com Site Profissional</h1>
            <h2 className="hero-subtitle">Sites modernos, responsivos e pensados para destacar sua empresa em qualquer lugar do Brasil.</h2>
            <Button href="/contact" aria-label="Ir para a seção de contato" text="Entre em Contato" />
            <div className="mouse-icon-container">
                <CiDesktopMouse2 className="mouse-icon" />
            </div>
        </section>
    );
};

export default HeroSection;
