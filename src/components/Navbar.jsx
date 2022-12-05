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
                <Button bg="transparent" color="#20B2AA">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button bg="#20B2AA" color="white">
                  Sign up
                </Button>
              </Link>
            </React.Fragment>
          ) : (
            <Button bg="#20B2AA" color="white">
              Log out
            </Button>
          )}
        </span>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
