"use client";

import React, { useState } from "react";
import Title from "./Title";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactData from "../data/contact.json";
import "../styles/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappLink = `https://wa.me/+5516994487287?text=${encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}`
    )}`;

    window.location.href = whatsappLink;
  };

  return (
    <section
      className="contact-section"
      id="contact"
      style={{ scrollMarginTop: "30px" }}
    >
      <Title text="Contato" />
      <h3>Vamos criar o site que seu negócio merece!</h3>
      <div className="contact-area">
        <div className="contact-info">
          {contactData.address && (
            <div>
              <FaMapMarkerAlt />
              <p>{contactData.address.text}</p>
            </div>
          )}
          {contactData.phone && (
            <div>
              <FaPhoneAlt />
              <p>{contactData.phone.text}</p>
            </div>
          )}
          {contactData.email && (
            <div>
              <FaEnvelope />
              <p>{contactData.email.text}</p>
            </div>
          )}
        </div>

        {/* Formulário de Contato */}
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(99) 99999-9999"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <a className="styledButton" href="#" onClick={handleSubmit}>
            Vamos Conversar
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
