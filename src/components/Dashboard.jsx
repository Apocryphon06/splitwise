import React, { useEffect } from "react";
import {
  DButton,
  DActions,
  DHead,
  DTitle,
  DWrapper,
  DBanner,
  InfoText,
} from "./Styled";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - Splitwise";
  });
  return (
    <DWrapper>
      <DHead>
        <DTitle>Dashboard</DTitle>
        <DActions>
          <DButton bg="#ff652f" color="#fcfcfc">
            Add an expense
          </DButton>
          <DButton bg="#5ac5a6" color="#fcfcfc">
            Settle up
          </DButton>
        </DActions>
      </DHead>

      {true ? (
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
