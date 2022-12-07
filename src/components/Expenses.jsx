import React from "react";
import { DActions, DButton, DHead, DTitle, DWrapper } from "./Styled";

function Expenses() {
  return (
    <DWrapper>
      <DHead>
        <DTitle>All expenses</DTitle>
        <DActions>
          <DButton bg="#ff652f" color="#fcfcfc">
            Add an expense
          </DButton>
          <DButton bg="#5ac5a6" color="#fcfcfc">
            Settle up
          </DButton>
        </DActions>
      </DHead>
    </DWrapper>
  );
}

export default Expenses;
