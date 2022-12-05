import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "./Styled.js";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>Home</Container>
      <Footer />
    </React.Fragment>
  );
}

export default Home;