"use client";
import "../styles/about.css";
import Title from "../components/Title"; // Importa a imagem do about section
const AboutSection = () => {
  return (
    <section
      id="about"
      className="about-section"
      style={{ scrollMarginTop: "30px" }}
    >
      <Title text="Quem Somos" />
      <h3 className="about-heading">
        Conheça nossa missão e como ajudamos empresas a crescer online.
      </h3>
      <div className="about-area">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732367079/online-school-equipment-home_xf5sq9.avif"
            alt="Studio Rafa Silva"
            loading="lazy"
            width={558}
            height={558}
          />
        </div>
        <div className="content-container">
          <p>
            Somos um estúdio especializado em desenvolvimento de sites modernos
            e personalizados para pequenas e médias empresas. Com foco em
            qualidade, funcionalidade e design, ajudamos nossos clientes a
            construir uma presença online profissional que impulsione seu
            negócio. Nosso compromisso é com a criatividade e inovação,
            proporcionando uma experiência única para cada cliente e cada
            projeto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
