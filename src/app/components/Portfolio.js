"use client";
import React, { useState } from "react";
import portfolioData from "../data/portfolio.json";
import "../styles/portfolio.css";
import Title from "./Title";

const PortfolioSection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageLoading, setImageLoading] = useState(true); // Novo estado para controlar o carregamento da imagem

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setImageLoading(true); // Resetar o estado de carregamento ao abrir o modal
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handleImageLoad = () => {
    setImageLoading(false); // Atualiza o estado quando a imagem for carregada
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
              width={200}
              height={400}
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
            {imageLoading && (
              <div className="loading-spinner">
                {/* O spinner pode ser um simples círculo animado */}
                <div className="spinner"></div>
              </div>
            )}
            <img
              src={portfolioData[selectedImageIndex].urlCompleteImage}
              alt={portfolioData[selectedImageIndex].textAlt}
              onLoad={handleImageLoad} // Quando a imagem terminar de carregar, muda o estado
              style={{ display: imageLoading ? "none" : "block" }} // Esconde a imagem até carregar
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
