import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Modal } from "react-bootstrap";
import {
  DButton,
  DActions,
  DHead,
  DTitle,
  DWrapper,
  MInput,
  InputContainer,
  Logo,
  InputWrapper,
  Currency,
  InfoLabel,
  InputButton,
  ButtonGroup,
  DateInput,
} from "./Styled";

import notebook from "./notebook.png";
import { useDispatch, useSelector } from "react-redux";

import { addExpense } from "../actions";
import ExpenseList from "./ExpenseList";

function Expenses({ gname }) {
  useEffect(() => {
    if (gname) {
      document.title = `${gname} - Splitwise`;
    } else {
      document.title = "Expenses - Splitwise";
    }
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const listData = useSelector((state) => state.expense);

  const groups = useSelector((state) => state.group);
  const friends = useSelector((state) => state.friend);

  const dispatch = useDispatch();

  const descRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const [Igroup, setIgroup] = useState();

  return (
    <DWrapper>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#5ac5b6" }}>
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
            list="browsers"
            style={{ fontSize: "16px" }}
            placeholder="Enter names or email addresses"
          />{" "}
          <InputButton>add</InputButton>
          <datalist id="browsers">
            {friends.map((friend) => (
              <option value={friend} />
            ))}
          </datalist>
        </Modal.Body>

        <Modal.Body>
          <InputContainer>
            <Logo
              style={{ width: "64px", height: "64px", marginRight: "50px" }}
              src={notebook}
              alt={notebook}
            />
            <span style={{ marginTop: "35px" }}>₹</span>
            <InputWrapper>
              <MInput
                style={{
                  fontSize: "18px",
                  borderBottom: "1.5px dotted #dfdfdf",
                  width: "200px",
                }}
                type="text"
                ref={descRef}
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
                  ref={amountRef}
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
              <DateInput
                type="date"
                ref={dateRef}
                onChange={(e) => alert(e.target.value)}
              />
            </InputButton>
            <InputButton>Add images/notes</InputButton>
          </ButtonGroup>

          <ButtonGroup>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "whitesmoke",
                  color: "#515151",
                  fontSize: "14px",
                  border: "1px solid #dfdfdf",
                  padding: "0px 20px",
                  borderRadius: "90px",
                }}
                id="dropdown-basic"
              >
                {gname ? gname : "No group"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {groups.map((group) => (
                  <Dropdown.Item
                    href="#/action-1"
                    value={gname ? gname : ""}
                    onClick={() => {
                      gname ? setIgroup(gname) : setIgroup(group);
                    }}
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
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
              dispatch(
                addExpense(
                  descRef.current.value,
                  amountRef.current.value,
                  dateRef.current.value,
                  Igroup
                )
              );
              console.log(
                descRef.current.value,
                amountRef.current.value,
                dateRef.current.value,
                Igroup
              );
            }}
          >
            Save
          </DButton>
        </Modal.Footer>
      </Modal>

      <DHead>
        <DTitle>{gname ? gname : "All Expenses"}</DTitle>
        <DActions>
          <DButton bg="#ff652f" color="#fcfcfc" onClick={handleShow}>
            Add an expense
          </DButton>
          <DButton bg="#5ac5a6" color="#fcfcfc">
            Settle up
          </DButton>
        </DActions>
      </DHead>

      {!gname ? (
        <React.Fragment>
          {listData.map((item) => (
            <ExpenseList
              description={item.description}
              amount={item.amount}
              date={item.date}
              group={item.group}
            />
          ))}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {listData
            .filter(function (e1) {
              return e1.group === gname;
            })
            .map((item) => (
              <ExpenseList
                description={item.description}
                amount={item.amount}
                date={item.date}
                group={item.group}
              />
            ))}
        </React.Fragment>
      )}
    </DWrapper>
  );
}

export default Expenses;
