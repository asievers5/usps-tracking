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

    let loginsignup = state.hasAccount ? <Login/> : <SignUp/>;

    return(
        <Container>
            <Modal>
                {loginsignup}
                <StyledButton type="button" onClick={navigateToSignUp}>{state.hasAccount ? "Dont have an account? Sign up" : "Already have an account? Log in"}</StyledButton>
            </Modal>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    background: #090e17;
    `;

const Modal = styled.div`
    position: absolute;
    background: #141e30;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 15px 25px;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: inherit;
  color: white;
  transition-duration: 0.2s;
  border: none;


  :hover {
    text-decoration: underline;
    cursor: pointer
  }
`;

export default LandingPage;