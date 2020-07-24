import React from 'react';
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

const statusList = (props) => {

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
        <>
        <Ul>
            {statusListElements}
        </Ul>
        <Map />
        </>
    );
}

export default statusList;
