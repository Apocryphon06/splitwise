import React from "react";
import { Container, Foot, Text } from "./Styled";
import Typewriter from "typewriter-effect";

function Footer() {
  return (
    <Container>
      <Foot>
        <Text>
          <Typewriter
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Splitwise clone built using React")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </Text>
      </Foot>
    </Container>
  );
}

export default Footer;
