'use client';

import React from "react";
import Title from "./Title";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactData from "../data/contact.json";  // Importação do arquivo JSON
import '../styles/contact.css';
import Button from "./Button";
const Contact = () => {
    return (
        <section className="contact-section" id="contact" style={{ scrollMarginTop: '30px' }}>
            <Title text="Contato" />
            <h3> Vamos criar o site que seu negócio merece!</h3>
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
                <form action="https://seuservidor.com/enviar-formulario" method="post" className="contact-form">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" name="name" placeholder="Seu nome" required />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Seu email" required />

                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="phone" placeholder="(99) 99999-9999" required />

                    <Button text="Enviar dados " />
                </form>
            </div>
        </section>
    );
};

export default Contact;
