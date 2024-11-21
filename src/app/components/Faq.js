'use client'; // Garantir que seja um componente do lado do cliente

import React, { useState } from "react";
import Title from "./Title";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import '../styles/faq.css';
import faqData from '../data/faq.json';  // Importando diretamente os dados JSON

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="section-container" id="section-container" style={{ scrollMarginTop: "30px" }}>
            <Title text="FAQ" />
            <div className="content-container">
                <h3 className="heading">Esclareça suas dúvidas sobre criação de sites.</h3>
                {faqData.length > 0 ? (
                    faqData.map((faq, index) => (
                        <div key={index}>
                            <h4 className="question" onClick={() => toggleAnswer(index)}>
                                {faq.question}
                                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </h4>
                            <div
                                className={`answer-container ${activeIndex === index ? 'visible' : ''}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Carregando FAQ...</p>
                )}
            </div>
        </section>
    );
};

export default FAQSection;
