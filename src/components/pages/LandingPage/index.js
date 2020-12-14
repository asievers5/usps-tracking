import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Login from '../../Authentication/Login'
import SignUp from '../../Authentication/SignUp'
import { COL_DARKBLUE, COL_LIGHTBLUE } from '../../Constants/Constants';

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
            <Card>
                {loginsignup}
                <StyledButton type="button" onClick={navigateToSignUp}>{state.hasAccount ? "Dont have an account? Sign up" : "Already have an account? Log in"}</StyledButton>
            </Card>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    background: ${COL_DARKBLUE};
    `;

const Card = styled.div`
    position: absolute;
    background: ${COL_LIGHTBLUE};
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