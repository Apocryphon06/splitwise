import React, { Fragment, useEffect, useRef, useState } from "react";
import logo from "./splitwise-logo.png";
import {
  Form,
  FormHeading,
  FormInput,
  FormLabel,
  SecondaryLabel,
  Image,
  RContainer,
  RWrapper,
  InputSecondary,
  Button,
  FormAction,
  ErrorBanner,
} from "./Styled";

function Signup() {
  useEffect(() => {
    document.title = "Sign up :: Splitwise";
  });

  const [errors, setErrors] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const pwordRef = useRef();

  const validateInput = () => {
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      pwordRef.current.value === ""
    )
      setErrors(true);
  };
  return (
    <RContainer>
      <RWrapper>
        <Image src={logo} alt={logo} />

        <Form>
          <FormHeading>Introduce yourself</FormHeading>

          {errors ? (
            <ErrorBanner>
              <span>The following errors occurred:</span>
              <ul>
                <li>First name can't be blank</li>
                <li>Email address can't be blank</li>
                <li>Password is too short (minimum is 8 characters)</li>
                <li>Please enter a valid email address.</li>
              </ul>
            </ErrorBanner>
          ) : (
            <Fragment></Fragment>
          )}

          <FormLabel>Hi there! My name is</FormLabel>
          <FormInput type="text" ref={nameRef} />
          <SecondaryLabel>Here’s my email address:</SecondaryLabel>
          <InputSecondary type="email" ref={emailRef} />

          <SecondaryLabel>And here’s my password:</SecondaryLabel>
          <InputSecondary type="password" ref={pwordRef} />
          <FormAction>
            <Button
              style={{ fontSize: "22px", fontWeight: "600" }}
              bg="#ff652f"
              color="#fcfcfc"
              onClick={validateInput}
            >
              Sign me up!
            </Button>

            <span style={{ color: "#909090" }}>or</span>

            <Button bg="#fcfcfc" color="black">
              Sign up with Google
            </Button>
          </FormAction>
        </Form>
      </RWrapper>
    </RContainer>
  );
}

export default Signup;
