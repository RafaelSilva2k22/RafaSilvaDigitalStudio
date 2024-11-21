
import '../styles/about.css';
import Title from '../components/Title';

const AboutSection = () => {
    return (
        <section id="about" className="about-section" style={{ scrollMarginTop: '30px' }}>
            <Title text="Quem Somos" />
            <h3 className="about-heading">Conheça nossa missão e como ajudamos empresas a crescer online.</h3>
            <div className="about-area">
                <div className="image-container">
                    <img
                        src="https://rafa-silva-digitalstudio.vercel.app/assets/about-image-skId_MzR.svg"
                        alt="Studio Rafa Silva"
                        loading="lazy"
                    />
                </div>
                <div className="content-container">
                    <p>
                        Somos um estúdio especializado em desenvolvimento de sites modernos e personalizados para pequenas e médias
                        empresas. Com foco em qualidade, funcionalidade e design, ajudamos nossos clientes a construir uma presença
                        online profissional que impulsione seu negócio. Nosso compromisso é com a criatividade e inovação,
                        proporcionando uma experiência única para cada cliente e cada projeto.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
