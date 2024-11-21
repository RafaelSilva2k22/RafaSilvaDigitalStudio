const Title = ({ text }) => {
    return (
        <div className="title-container">
            <div className="line"></div>
            <h2 className="title-text">{text}</h2>
            <div className="line"></div>
        </div>
    );
};

export default Title;
