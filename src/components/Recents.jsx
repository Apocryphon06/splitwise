import React, { useEffect } from "react";
import { DHead, DTitle, DWrapper } from "./Styled";

function Recents() {
    useEffect(() => {
        document.title = "Recents";
      });
  return (
    <DWrapper>
      <DHead>
        <DTitle>Recent Activity</DTitle>
      </DHead>
    </DWrapper>
  );
}

export default Recents;
