import React, { Fragment } from 'react';
import styled from 'styled-components';


const inputTracking = (props) => {

    return(
        <Container>
            <TextField>
                <Input type="text" placeholder="Input Tracking Number" onChange={props.inputChangeHandler} value={props.value}/>
            </TextField>
            <TrackButton onClick={props.trackButtonClickHandler} >Track</TrackButton>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
    font-size: 16px;
    color: white;
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #4CAF50;
    outline: none;
    background: transparent;

    ::placeholder {
        color: white;
    }
`;

const TextField = styled.label`
  width: 100%;
`;

const TrackButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: 2px solid #4CAF50; /* Green */
  padding: 10px;
  transition-duration: 0.2s;
  border-radius: 2px;

  :hover {
    background-color: #7bdb7f;
    font-weight: bold; 
    /*cursor: pointer;
    box-shadow: 0 0 3px #4CAF50, 0 0 6px #4CAF50, 0 0 12px #005;*/
    transition: box-shadow .2s;
    transition: color .2s;
  }
`;

export default inputTracking;


