import servicesData from '../data/services.json';
import '../styles/services.css';
import * as Icons from 'react-icons/fa'; // Importa todos os ícones da família FontAwesome

const ServicesSection = () => {
    return (
        <section id="services" className="services-section">
            <div className="title-container">
                <div className="line"></div>
                <h2 className="title-text">Serviços</h2>
                <div className="line"></div>
            </div>
            <h3 className="section-subtitle">Serviços personalizados para seu negócio online</h3>
            <div className="services-grid">
                {servicesData.map((service) => {
                    // Obter o componente do ícone dinamicamente
                    const IconComponent = Icons[service.icon];
                    return (
                        <div className="service-card" key={service.id}>
                            <div className="icon-container">
                                {IconComponent && <IconComponent />} {/* Renderiza o ícone se encontrado */}
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
