import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../../firebase/base";
import styled from 'styled-components';

const SignUp = (props, { history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault(); //dont reload page after
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <Header2>Sign Up for USPS Tracking</Header2>
      <form onSubmit={handleSignUp}>
        <InfoBox>
          <input name="email" type="email" placeholder="Email" />
        </InfoBox>
        <InfoBox>
          <input name="password" type="password" placeholder="Password" />
        </InfoBox>
        <ButtonDiv>
          <StyledButton type="submit">Sign Up </StyledButton>
        </ButtonDiv>
      </form>
    </div>
  );
};


const Header2 = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

const InfoBox = styled.label`
  position: relative;

  input {
    width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 2px solid #4CAF50;
  outline: none;
  background: transparent;
  }
`;

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: 2px solid #4CAF50; /* Green */
  padding: 10px;
  transition-duration: 0.2s;
  border-radius: 2px;

  :hover {
    background-color: #7bdb7f;
    cursor: pointer;

  }
`;

const ButtonDiv = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export default withRouter(SignUp);