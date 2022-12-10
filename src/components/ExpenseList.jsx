import React from "react";
import styled from "styled-components";
import notebook from "./notebook.png";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #f8f8f8;
  }
  border-bottom: 1px solid #dfdfdf;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-right: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Group = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 2px 5px;
  background-color: #eeeeee;
  width: fit-content;
  border-radius: 90px;
`;

const ColLabel = styled.div`
  font-size: 14px;
`;

const Amount = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.color};
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Month = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  color: #999999;
`;

const Day = styled.div`
  font-size: 20px;
  color: #999999;
  font-weight: 600;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.7;
  margin: 5px;
`;
function ExpenseList({ description, amount, date, group }) {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <ListWrapper>
      <RowWrapper>
        <ColWrapper style={{ lineHeight: 1 }}>
          <Month>{month[date.slice(5, 7) - 1]}</Month>
          <Day>{date.slice(8)}</Day>
        </ColWrapper>

        <ColWrapper>
          <Logo src={notebook} alt={notebook} />
        </ColWrapper>

        <ColWrapper>
          <Title>{description}</Title>
          <Group>{group}</Group>
        </ColWrapper>
      </RowWrapper>

      <RowWrapper>
        <ColWrapper>
          <ColLabel>you paid</ColLabel>
          <Amount color="#5ac5b6">₹{amount}</Amount>
        </ColWrapper>

        <ColWrapper>
          <ColLabel>you lent</ColLabel>
          <Amount color="#ff652f">₹{amount}</Amount>
        </ColWrapper>
      </RowWrapper>
    </ListWrapper>
  );
}

export default ExpenseList;
