import { useState } from "react";
import Container from "react-bootstrap/Container";
import JobOffers from "./components/JobOffers";
import SearchBar from "./components/SearchBar";
import data from "./data/data.json";

import "./App.css";
import './index.css'

function App() {
  return (
    <Container class="container-xl" >
      <SearchBar />
      <JobOffers data={data} />
    </Container>
  );
}

export default App;
