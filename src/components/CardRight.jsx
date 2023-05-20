function CardRight({ role, level, languages, tools, handleFilterClick }) {
    return (
      <div className="RightContainer">
        <button onClick={() => handleFilterClick(role)}>{role}</button>
        <button onClick={() => handleFilterClick(level)}>{level}</button>
        {languages.map((language, index) => (
          <button key={index} onClick={() => handleFilterClick(language)}>{language}</button>
        ))}
        {tools.map((tool, index) => (
          <button key={index} onClick={() => handleFilterClick(tool)}>{tool}</button>
        ))}
      </div>
    );
  }
  
  export default CardRight;
  