import React from "react";
import { Link } from "react-router-dom";
import { Brand, Button, Container, Logo, Wrapper } from "./Styled";
import logo from "./splitwise-logo.png";



function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Brand>
            <Logo src={logo} alt={logo} />
            Splitwise
          </Brand>
        </Link>
        <span>
          {true ? (
            <React.Fragment>
              <Link to="/login">
                <Button bg="transparent" color="#5bc4a6">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button bg="#5bc4a6" color="white">
                  Sign up
                </Button>
              </Link>
            </React.Fragment>
          ) : (
            <Button bg="#5bc4a6" color="white">
              Log out
            </Button>
          )}
        </span>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
