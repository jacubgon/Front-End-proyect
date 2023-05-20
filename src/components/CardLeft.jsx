
function CardLeft({
  logo,
  company,
  date,
  featured,
  position,
  postedAt,
  contract,
  location,
}) {


  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="LeftContainer" style={{ display: "block" }}>
        <div className="Company">
          <p 
            style={{
              color: "#40A5A4",
              fontSize: "18px",
              display: "block",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            {company}
          </p>
            {date?<p className='date'>NEW!</p> : '' }
            {featured ?<p className='featured'>FEATURED</p> : '' }
        </div>
        <div className="Position">
          <p>{position}</p>
        </div>
        <div className="Info" style={{ display: "flex"}}>
          <p>{postedAt}</p>
          <p>{contract}</p>
          <p>{location}</p>
        </div>
      </div>
    </>
  );
}

export default CardLeft;
