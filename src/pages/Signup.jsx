import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container } from "./Styled";

function Signup() {
  useEffect(() => {
    document.title = "Sign up :: Splitwise";
  });
  return (
    <React.Fragment>
      <Navbar />
      <Container>Signup</Container>
      <Footer />
    </React.Fragment>
  );
}

export default Signup;
