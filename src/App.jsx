import { useState } from "react";
import Container from "react-bootstrap/Container";
import JobOffers from "./components/JobOffers";
import SearchBar from "./components/SearchBar";
import data from "./data/data.json";

import "./App.css";
import './index.css'

function App() {

  // aplico estado para los filtros
  const [selectedFilters, setSelectedFilters] = useState([]);
  // funcion manejadora filtros
  const handleFilterClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(item => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <Container className="container-xl">
      <SearchBar selectedFilters={selectedFilters} />
      <JobOffers data={data} handleFilterClick={handleFilterClick} />
    </Container>
  );
  
}
 export default App;
