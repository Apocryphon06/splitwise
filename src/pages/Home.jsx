import React from "react";
import { Link } from "react-router-dom";
import {
  Account,
  Advertisement,
  Brand,
  Container,
  Content,
  Logo,
  Name,
  NavWrapper,
  Profile,
  ShowContent,
  Title,
  VerticalMenu,
} from "./Styled";
import logo from "./splitwise-logo.png";

function Home() {
  return (
    <Container>
      <NavWrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Brand>
            <Logo src={logo} alt={logo} />
            Splitwise
          </Brand>
        </Link>
        <Account>
          <Profile />
          <Name>Hrithik</Name>
        </Account>
      </NavWrapper>
      <Content>
        <VerticalMenu>
          <Title color="#5bc4a6">
            <Logo src={logo} alt={logo} />
            Dashboard
          </Title>
          <Title color="#ff652f">
            {" "}
            <span style={{ margin: "0 5px", width: "25px", height: "25px" }}>
              ⛿
            </span>{" "}
            Recent activity
          </Title>
          <span>filter by name input field</span>
          <span>All expenses column</span>
          <span>Groups add+ feature</span>
          <span>goa</span>
          <span>Friends add+ feature</span>
          <span>nishchal</span>
        </VerticalMenu>
        <ShowContent>
          <span>Dashboard</span>
          <span>Recent activity</span>
          <span>Groups</span>
          <span>Friends</span>
        </ShowContent>
        <Advertisement>
          <span> get splitwise pro</span>
          <span>
            Subscribe to Splitwise Pro for no ads, currency conversion, charts,
            search, and more. Learn more
          </span>
          <span>learn more button</span>
        </Advertisement>
      </Content>
    </Container>
  );
}

export default Home;
