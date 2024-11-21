// components/Button.js
import "../styles/button.css";

const Button = ({ href, text, target, rel }) => {
    return (
        <a href={href} className='styledButton' target={target} rel={rel}>
            {text}
        </a>
    );
};

export default Button;
