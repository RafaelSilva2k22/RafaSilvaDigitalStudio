"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageNotFound from "../public/images/404.avif";
import Button from "../components/Button";
import "../styles/404.css"; // Importando o arquivo de estilos

const NotFoundPage = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img className="not-found-image" src={ImageNotFound} alt="Erro 404" />
      <h1 className="not-found-title">Página não encontrada</h1>
      <p className="not-found-subtitle">
        Oops! A página que você está procurando não existe.
      </p>
      <Button href="/" text="Voltar à Página Inicial" />
    </div>
    <Footer />
  </>
);

export default NotFoundPage;
