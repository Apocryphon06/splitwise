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

import { Button, Form, InputGroup, Modal } from "react-bootstrap";

import logo from "./splitwise-logo.png";
import Dashboard from "../components/Dashboard";
import Recents from "../components/Recents";
import Expenses from "../components/Expenses";

import tag from "./tag.png";
import user from "./user.png";
import bullet from "./bullet.png";
import flagIcon from "./flag.png";

import { useDispatch, useSelector } from "react-redux";
import { addFriend, addGroup } from "../actions";

function Home() {
  const [section, setSection] = useState("dashboard");
  const [gname, setGname] = useState("");
  const [fname, setFname] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderSections = () => {
    if (section === "dashboard") return <Dashboard />;
    if (section === "recents") return <Recents />;
    if (section === "all") return <Expenses />;
    if (section === "group") return <Expenses gname={gname} />;
    if (section === "friend") return <Expenses gname={fname} />;
  };

  const friends = useSelector((state) => state.friend);
  const groups = useSelector((state) => state.group);

  const [fInput, setFinput] = useState("");
  const dispatch = useDispatch();

  const [flag, setFlag] = useState("");

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {flag === "new_friend" ? <>Add Friend</> : <>New Group</>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setFinput(e.target.value)}
              placeholder={flag === "new_friend" ? "Enter Name" : "Group Name"}
              aria-label={flag === "new_friend" ? "Enter Name" : "Group Name"}
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#ff652f", border: "none", fontWeight:600 }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "#5ac5a6", border: "none", fontWeight:600  }}
            onClick={() => {
              if (flag === "new_friend") dispatch(addFriend(fInput));
              if (flag === "new_group") dispatch(addGroup(fInput));
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

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
            <Logo
              style={{ width: "20px", height: "20px", opacity: 0.5 }}
              src={flagIcon}
              alt={flagIcon}
            />
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
              <Icon src={bullet} alt={bullet} /> All expenses{" "}
            </MTitle>
          </ColumnWrapper>

          <ColumnWrapper>
            <MTitle bg="whitesmoke" style={{ justifyContent: "space-between" }}>
              {" "}
              Groups{" "}
              <Add
                onClick={() => {
                  setFlag("new_group");
                  handleShow();
                }}
              >
                add+
              </Add>{" "}
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
            <MTitle bg="whitesmoke" style={{ justifyContent: "space-between" }}>
              {" "}
              Friends
              <Add
                onClick={() => {
                  setFlag("new_friend");
                  handleShow();
                }}
              >
                add+
              </Add>{" "}
            </MTitle>
            {friends.map((item) => (
              <MItem
                onClick={() => {
                  setFname(item);
                  setSection("friend");
                }}
              >
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
        </Advertisement>
      </Content>
    </Container>
  );
}

export default Home;
