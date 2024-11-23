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
            srcSet="
        https://res.cloudinary.com/dcyw5xzx4/image/upload/c_fill,w_300,h_300,ar_1:1/v1732367079/online-school-equipment-home_xf5sq9.avif 300w,
        https://res.cloudinary.com/dcyw5xzx4/image/upload/v1732367079/online-school-equipment-home_xf5sq9.avif 558w"
            sizes="(max-width: 768px) 300px,558px"
            alt="Studio Rafa Silva"
            loading="lazy"
            width={558}
            height={558}
          />
        </div>
        <div className="content-container">
          <h4>Missão</h4>
          <p>
            Transformar ideias em presença digital. Nosso propósito é ajudar
            pequenas e médias empresas a crescerem online, criando sites que
            combinam funcionalidade, design e resultados.
          </p>
          <h4>Sobre Nós</h4>
          <p>
            Somos especialistas em criar sites modernos e personalizados,
            focados em atender às necessidades de cada cliente. Nosso estúdio
            trabalha com dedicação para fazer sites que reflitam a essência de
            sua marca, garantindo uma experiência única para o usuário final.
          </p>
          <h4>Como Fazemos a Diferença</h4>
          <p>
            Nosso processo une criatividade, tecnologia e inovação para entregar
            sites profissionais, responsivos e otimizados para SEO. Sabemos que
            um site bem feito é o primeiro passo para o sucesso online, e por
            isso priorizamos qualidade e eficiência em cada projeto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
