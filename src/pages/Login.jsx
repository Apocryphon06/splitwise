import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container } from "./Styled";

function Login() {
  useEffect(() => {
    document.title = "Log in :: Splitwise";
  });
  return (
    <React.Fragment>
      <Navbar />
      <Container>Login</Container>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
