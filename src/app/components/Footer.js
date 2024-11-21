'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import footerData from '../data/footer.json'; // Importa os dados do JSON
import '../styles/footer.css';

const icons = {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
};

function Footer() {
    return (
        <footer className="footer-container">
            <div className="social-icons">
                {footerData.socialLinks.map((link, index) => {
                    const IconComponent = icons[link.icon];
                    return (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                        >
                            <IconComponent />
                        </a>
                    );
                })}
            </div>
            <p dangerouslySetInnerHTML={{ __html: footerData.copyright }} />
        </footer>
    );
}

export default Footer;
