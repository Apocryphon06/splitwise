import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container } from "./Styled";

function Login() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>Login</Container>
      <Footer />
    </React.Fragment>
  );
}

export default Login;