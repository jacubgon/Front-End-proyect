function CardRight({ role, level, languages, tools }) {
    return (
      <div className="RightContainer">
        <button>{role}</button>
        <button>{level}</button>
        {languages.map((language, index) => (
          <button key={index}>{language}</button>
        ))}
        {tools.map((tool, index) => (
          <button key={index}>{tool}</button>
        ))}
      </div>
    );
  }
  
  export default CardRight;
  