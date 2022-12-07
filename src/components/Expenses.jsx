import React, { Fragment, useEffect } from "react";
import { DActions, DButton, DHead, DTitle, DWrapper } from "./Styled";

function Expenses({ gname }) {
  useEffect(() => {
    document.title = "Expenses - Splitwise";
  });

  return (
    <DWrapper>
      <DHead>
        <DTitle>
          {gname ? (
            <Fragment>{gname}</Fragment>
          ) : (
            <Fragment>All expenses</Fragment>
          )}
        </DTitle>
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
