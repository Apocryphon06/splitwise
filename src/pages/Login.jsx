import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Button,
  GButton,
  Container,
  Divider,
  Heading,
  Horiz,
  Input,
  Label,
  LoginWrapper,
} from "./Styled";

function Login() {
  useEffect(() => {
    document.title = "Log in :: Splitwise";
  });
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <LoginWrapper>
          <Heading>Log in</Heading>
          <Label>Email address</Label>
          <Input type="email" />
          <Label>Password</Label>
          <Input type="password" />

          <Button bg="#20B2AA" color="white">
            Log in
          </Button>
          <Button bg="transparent" color="#20B2AA">
            Forgot your password?
          </Button>
          <Divider>
            <Horiz />
            or
            <Horiz />
          </Divider>

          <GButton bg="white" color="#515151">
            Sign in with Google
          </GButton>
        </LoginWrapper>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
