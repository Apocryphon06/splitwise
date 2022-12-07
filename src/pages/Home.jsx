import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Account,
  Add,
  Advertisement,
  Brand,
  ColumnWrapper,
  Container,
  Content,
  Icon,
  Logo,
  MItem,
  MTitle,
  Name,
  NavWrapper,
  Profile,
  ShowContent,
  Title,
  VerticalMenu,
} from "./Styled";
import logo from "./splitwise-logo.png";
import Dashboard from "../components/Dashboard";
import Recents from "../components/Recents";
import Expenses from "../components/Expenses";

import tag from "./tag.png";
import user from "./user.png";

import { Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function Home() {
  const [section, setSection] = useState("dashboard");
  const [gname, setGname] = useState("");

  const renderSections = () => {
    if (section === "dashboard") return <Dashboard />;
    if (section === "recents") return <Recents />;
    if (section === "all") return <Expenses />;
    if (section === "group") return <Expenses gname={gname} />;
  };

  const testData = useSelector((state) => state.test);
  const friends = useSelector((state) => state.friend);
  const groups = useSelector((state) => state.group);

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
          <Title color="#5bc4a6" onClick={() => setSection("dashboard")}>
            <Logo
              style={{ width: "20px", height: "20px" }}
              src={logo}
              alt={logo}
            />
            Dashboard
          </Title>
          <Title color="#ff652f" onClick={() => setSection("recents")}>
            {" "}
            <span style={{ margin: "0 5px", width: "20px", height: "20px" }}>
              ⛿
            </span>{" "}
            Recent activity
          </Title>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
            <Form.Control
              size="sm"
              placeholder="Filter by name"
              aria-label="Filter by name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <ColumnWrapper>
            <MTitle
              bg="none"
              style={{ cursor: "pointer" }}
              onClick={() => setSection("all")}
            >
              {" "}
              All expenses{" "}
            </MTitle>
          </ColumnWrapper>

          <ColumnWrapper>
            <MTitle bg="whitesmoke">
              {" "}
              Groups <Add>add+</Add>{" "}
            </MTitle>
            {groups.map((item) => (
              <MItem
                onClick={() => {
                  setGname(item);
                  setSection("group");
                }}
              >
                {" "}
                <Icon src={tag} alt={tag} /> {item}
              </MItem>
            ))}
          </ColumnWrapper>

          <ColumnWrapper>
            <MTitle bg="whitesmoke">
              {" "}
              Friends
              <Add
                onClick={() => {
                  alert("implement modal to add friend");
                }}
              >
                add+
              </Add>{" "}
            </MTitle>
            {friends.map((item) => (
              <MItem>
                {" "}
                <Icon src={user} alt={user} /> {item}
              </MItem>
            ))}
          </ColumnWrapper>
        </VerticalMenu>
        <ShowContent>{renderSections()}</ShowContent>
        <Advertisement>
          <span> get splitwise pro</span>
          <span>
            Subscribe to Splitwise Pro for no ads, currency conversion, charts,
            search, and more. Learn more
          </span>
          <span>learn more button</span>
          <span> data from redux store: {testData}</span>
        </Advertisement>
      </Content>
    </Container>
  );
}

export default Home;
