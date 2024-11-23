"use client";
import React, { useState } from "react";
import portfolioData from "../data/portfolio.json";
import "../styles/portfolio.css";
import Title from "./Title";

const PortfolioSection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setImageLoading(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
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
              srcSet={`${portfolio.urlImageMobile} 170w, ${portfolio.urlImage} 200w`}
              sizes="(max-width: 768px) 170px, 227px"
              alt={portfolio.textAlt}
              loading="lazy"
              onClick={() => openModal(index)}
              width={200}
              height={356}
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
                <div className="spinner"></div>
              </div>
            )}
            <img
              src={portfolioData[selectedImageIndex].urlCompleteImage}
              alt={portfolioData[selectedImageIndex].textAlt}
              onLoad={handleImageLoad}
              style={{ display: imageLoading ? "none" : "block" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
