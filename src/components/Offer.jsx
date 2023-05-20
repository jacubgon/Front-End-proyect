import Card from "react-bootstrap/Card";
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";

const Offer = ({
  company,
  date,
  position,
  role,
  level,
  logo,
  featured,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#ffffff",
          marginBottom: "30px",
          marginLeft: "165px",
          marginRight: "165px",
          width: "1110px",
          height: "152px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"

          }}
        >
          <CardLeft 
          logo={logo}
          company={company}
          date={date}
          featured={featured}
          position={position}
          postedAt={postedAt}
          contract={contract}
          location={location}
          />
           <CardRight 
           role={role}
           level={level}
           languages={languages}
           tools={tools}
           />
        </Card.Body>
      </Card>
    </>
  );
};

export default Offer;
