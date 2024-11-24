"use client";
import { FaSearch, FaMobileAlt, FaPalette } from "react-icons/fa"; // Importa apenas os ícones necessários
import "../styles/services.css";

const servicesData = [
  {
    id: 1,
    icon: FaSearch, // Usando o componente diretamente
    title: "SEO Otimizado",
    description:
      "Desenvolvemos sites otimizados para melhorar a visibilidade nos mecanismos de busca e atrair mais clientes para o seu negócio.",
  },
  {
    id: 2,
    icon: FaMobileAlt, // Usando o componente diretamente
    title: "Design Responsivo",
    description:
      "Sites que se adaptam a todos os dispositivos, garantindo uma experiência perfeita para os usuários em qualquer tela.",
  },
  {
    id: 3,
    icon: FaPalette, // Usando o componente diretamente
    title: "Experiência do Usuário",
    description:
      "Sites criados com foco na navegação intuitiva e visual atraente, melhorando a experiência dos visitantes e incentivando a conversão.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="title-container">
        <div className="line"></div>
        <h2 className="title-text">Serviços</h2>
        <div className="line"></div>
      </div>
      <h3 className="section-subtitle">
        Serviços personalizados para seu negócio online
      </h3>
      <div className="services-grid">
        {servicesData.map((service) => {
          return (
            <div className="service-card" key={service.id}>
              <div className="icon-container">
                <service.icon /> {/* Usando o componente diretamente */}
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
