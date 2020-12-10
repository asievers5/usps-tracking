import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Login from '../../common/Authentication/Login'
import SignUp from '../../common/Authentication/SignUp'

const LandingPage = (props) => {

    let initialState = {
        "hasAccount" : "true"
    }

    const [state, setstate] = useState(initialState);

    const navigateToSignUp = () => {
        setstate(
            (prevState) => {
                if(prevState.hasAccount) {
                    return({hasAccount: false})
                }
                else{
                    return({hasAccount: true})
                }
            }
        );
    }

    let loginsignup = state.hasAccount ? <Login /> : <SignUp />;

    return(
        <Container>
            <Modal>
                {loginsignup}
    <StyledButton type="button" onClick={navigateToSignUp}>{state.hasAccount ? "Register" : "Log in"}</StyledButton>
            </Modal>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    background: linear-gradient(#141e30, #243b55);
    
`;

const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.5);
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 15px 25px;

`;

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

export default LandingPage;