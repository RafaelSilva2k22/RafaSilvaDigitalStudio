import data from '../data/technologies.json'; // Importa todo o objeto
import '../styles/divider.css';

function Divider() {
    const { technologies } = data; // Extrai a propriedade "technologies"

    return (
        <div className="divider-container">
            <div className="scroll-wrapper">
                {technologies.map((tech, index) => (
                    <span className="tech-item" key={index}>{tech}</span>
                ))}
                {technologies.map((tech, index) => (
                    <span className="tech-item" key={`${index}-duplicate`}>{tech}</span>
                ))}
            </div>
        </div>
    );
}

export default Divider;
