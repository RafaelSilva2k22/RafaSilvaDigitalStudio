'use client';
import React, { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';
import '../styles/portfolio.css';
import Title from "./Title";

const PortfolioSection = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => (document.body.style.overflow = 'auto');
    }, [selectedImageIndex]);

    const openModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    return (
        <section className="section-container" id="portfolio">
            <Title text="Portfolio" />
            <h3 className="section-subtitle">
                Conheça os projetos que transformam negócios online.
            </h3>
            <div className="portfolio-grid">
                {portfolioData.map((portfolio, index) => (
                    <div className="portfolio-card" key={portfolio.id}>
                        <img
                            className="project-image"
                            src={portfolio.urlImage}
                            alt={portfolio.textAlt}
                            loading="lazy"
                            onClick={() => openModal(index)}
                        />
                    </div>
                ))}
            </div>

            {selectedImageIndex !== null && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={closeModal}>
                            Fechar
                        </button>
                        <img
                            src={portfolioData[selectedImageIndex].urlCompleteImage}
                            alt={portfolioData[selectedImageIndex].textAlt}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default PortfolioSection;
