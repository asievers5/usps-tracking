import React, { useState } from 'react';
import Map from '../../Leaflet/Map';
import styled from 'styled-components';
import * as CONSTANTS from '../../Constants/Constants'

const Ul = styled.ul`
    list-style: none;
    padding-left: 0px;
    padding-bottom: 2px;
    border-bottom: 1px solid ${CONSTANTS.COL_GREEN};

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
                return <Li key={index}>Invalid Tracking Number</Li>
            }
            else{
                //return <li key={index}>{statusLine}</li>
            }
        }
        return <Li key={index}>{statusLine}</Li>
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
    background-color: ${CONSTANTS.COL_DARKBLUE};
`;

const Li = styled.li`
    color: white;
`;

export default singleDeliveryStatus;
