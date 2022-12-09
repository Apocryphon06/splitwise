import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  DButton,
  DActions,
  DHead,
  DTitle,
  DWrapper,
  DBanner,
  InfoText,
  MInput,
  InputContainer,
  Logo,
  InputWrapper,
  Currency,
  InfoLabel,
  InputButton,
  ButtonGroup,
} from "./Styled";

import notebook from "./notebook.png";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - Splitwise";
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <DWrapper>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#5ac5b6"}}
        >
          <Modal.Title style={{ color: "#fcfcfc", fontWeight: 600 }}>
            Add an expense
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{ fontSize: "16px", borderBottom: "1px solid #dfdfdf" }}
        >
          <span style={{ color: "#515151" }}>
            With <b>you</b> and:
          </span>{" "}
          <MInput
            style={{ fontSize: "16px" }}
            placeholder="Enter names or email addresses"
          />{" "}
        </Modal.Body>

        <Modal.Body>
          <InputContainer>
            <Logo
              style={{ width: "64px", height: "64px", marginRight: "50px" }}
              src={notebook}
              alt={notebook}
            />
            <InputWrapper>
              <MInput
                style={{
                  fontSize: "18px",
                  borderBottom: "1.5px dotted #dfdfdf",
                  width: "200px",
                }}
                type="text"
                placeholder="Enter a description"
              />

              <Currency>
                <MInput
                  style={{
                    fontSize: "24px",
                    fontWeight: 600,
                    borderBottom: "1.5px dotted #dfdfdf",
                    width: "200px",
                  }}
                  type="text"
                  placeholder="0.00"
                />
              </Currency>
            </InputWrapper>
          </InputContainer>
          <InfoLabel>
            paid by <b style={{ cursor: "pointer" }}>you</b> split{" "}
            <b style={{ cursor: "pointer" }}>equally</b>
          </InfoLabel>

          <ButtonGroup>
            <InputButton style={{ marginRight: 10 }}>
              December 9, 2022
            </InputButton>
            <InputButton>Add images/notes</InputButton>
          </ButtonGroup>

          <ButtonGroup>
            <InputButton>No group</InputButton>
          </ButtonGroup>
        </Modal.Body>

        <Modal.Footer>
          <DButton bg="whitesmoke" color="#909090" onClick={handleClose}>
            Cancel
          </DButton>
          <DButton
            bg="#5ac5a6"
            color="#fcfcfc"
            onClick={() => {
              handleClose();
            }}
          >
            Save
          </DButton>
        </Modal.Footer>
      </Modal>

      <DHead>
        <DTitle>Dashboard</DTitle>
        <DActions>
          <DButton bg="#ff652f" color="#fcfcfc" onClick={handleShow}>
            Add an expense
          </DButton>
          <DButton bg="#5ac5a6" color="#fcfcfc">
            Settle up
          </DButton>
        </DActions>
      </DHead>

      {false ? (
        <React.Fragment>
          <DBanner>You’re all settled up. Awesome!</DBanner>
          <InfoText>
            To add a new expense, click the orange “Add an expense” button.
          </InfoText>
        </React.Fragment>
      ) : (
        <p>show list of expenses</p>
      )}
    </DWrapper>
  );
}

export default Dashboard;
