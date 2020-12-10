import React, { useCallback, useContext } from "react";
import { connect } from 'react-redux';
import * as actionTypes from '../../../../redux/UserAuth/constants';
import { withRouter, Redirect } from "react-router";
import app from '../../../../firebase/base';
import { AuthContext } from "../../../../firebase/Auth";
import styled from 'styled-components';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Header2>Log in to USPS Tracker</Header2>
      <form onSubmit={handleLogin}>
        <InfoBox>
          <input name="email" type="email" placeholder="Email" />
        </InfoBox>
        <InfoBox>
          <input name="password" type="password" placeholder="Password" />
        </InfoBox>
        <StyledButton type="submit">Submit</StyledButton>
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
}`

const StyledButton = styled.button`
  background-color: inherit;
  color: white;
  border: 2px solid #4CAF50; /* Green */
  padding: 10px;
  transition-duration: 0.2s;

  :hover {
    color: black;
    background-color: #4CAF50;
  }
`;

/*
const mapDispatchToProps = state => {
  return {
    handleLogin: () => dispatchEvent({})
  }
}
*/ 

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
export default withRouter(Login);