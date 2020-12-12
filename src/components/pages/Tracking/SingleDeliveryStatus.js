import React, { useState } from 'react';
import Map from '../../Leaflet/Map';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    padding-left: 0px;
    padding-bottom: 2px;
    border-bottom: 1px solid black;

    li:hover {
        background-color: #fff8dc;
    }
`

const singleDeliveryStatus = (props) => {

    let initialState = {
        "ShowCompleteList": false
    }

    const [state, setstate] = useState(initialState);

    const handleStatusListToggle = () => {
        setstate((prevState) => ({ShowCompleteList: !prevState.ShowCompleteList}))
    }

    console.log(props.trackingInfo)
    let statusListElements = props.trackingInfo.map((statusLine, index) => {
        if(index===0){
            if(statusLine.includes("2147")){
                return <li key={index}>Invalid Tracking Number</li>
            }
            else{
                //return <li key={index}>{statusLine}</li>
            }
        }
        return <li key={index}>{statusLine}</li>
    });

    return (
        <Div>
            <button onClick={handleStatusListToggle}>{"State: " + state.ShowCompleteList}</button>
            <Ul>
                {state.ShowCompleteList ? statusListElements : statusListElements[0]}
            </Ul>
            <Map />
        </Div>
    );
}

const Div = styled.div`
    background-color: blueviolet;
    border: 1px solid black;
`;

export default singleDeliveryStatus;
