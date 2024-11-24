"use client";
import React, { useState } from "react";
import "../styles/portfolio.css";
import Title from "./Title";
import Image from "next/image";

const PortfolioSection = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  // Dados do portfólio diretamente no componente
  const portfolioData = [
    {
      id: 1,
      urlImage: "/images/project1.webp",
      urlImageMobile: "/images/portfolio-image-1-mobile.webp",
      textAlt: "Imagem site 1",
      urlCompleteImage:
        "https://res.cloudinary.com/dcyw5xzx4/image/upload/v1731874384/Fintech_Landingpage_wcndb9.svg",
    },
    {
      id: 2,
      urlImage: "/images/project1.webp",
      urlImageMobile: "/images/portfolio-image-2-mobile.webp",
      textAlt: "Imagem site 2",
      urlCompleteImage:
        "https://res.cloudinary.com/dcyw5xzx4/image/upload/v1731874383/Travel_Agency_Landing_Page_UI_vjbgys.svg",
    },
    // Adicione mais itens conforme necessário
  ];

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
            <Image
              className="project-image"
              src={portfolio.urlImage}
              alt={portfolio.textAlt}
              width={200}
              height={356}
              onClick={() => openModal(index)}
              priority
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
            <Image
              src={portfolioData[selectedImageIndex].urlCompleteImage}
              alt={portfolioData[selectedImageIndex].textAlt}
              onLoad={handleImageLoad}
              style={{ display: imageLoading ? "none" : "block" }}
              width={800}
              height={600}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
