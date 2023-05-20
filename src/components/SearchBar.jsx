import Card from "react-bootstrap/Card";

function SearchBar() {
  return (
    <Card
      className="Searchbar"
      style={{
        justifyContent:'space-between',
        display:'flex',
        backgroundColor: "white",
        width: "1110px",
        height: "72px",
        left: "165px",
        marginLeft: "165px",
        marginRight: "165px",
        marginTop: " 120px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      
      }}
    >
      <Card.Body >
        <button>BOTON</button>
        <button
        //   style={{
        //     fontSize: "16px",
        //     lineHeight: "24px",
        //     textAlign: "right",
        //     textDecorationLine: "underline",
        //     
        //     background:'none'
        //   }}
        >
          Clear
        </button>
      </Card.Body>
    </Card>
  );
}

export default SearchBar;

