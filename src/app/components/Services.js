"use client";

import servicesData from "../data/services.json";
import "../styles/services.css";

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
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div
              className="icon-container"
              dangerouslySetInnerHTML={{ __html: service.icon }}
            ></div>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;