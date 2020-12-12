import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logout from '../../Authentication/Logout';
import Hamburger from './Hamburger';
import * as CONSTANTS from '../../Constants/Constants'

const navBar = (props) => {

    let initialState = {
        "displayStatus" : ""
    }

    const [state, setstate] = useState(initialState);

    const hamburgerClick = () => {
        console.log("state");
        
        setstate(
            (prevState) => {
                if(prevState.displayStatus === "hidden"){
                    return ({displayStatus: ""})
                }
                else{
                    return ({displayStatus: "hidden"})
                }
            })       
    }

    return(
        <Nav>
            <Ul>
                <div onClick={hamburgerClick}>
                    <Hamburger />
                </div>
                <LinksDiv className={state.displayStatus}>
                    <Li>
                        <NavLink to="/usps-tracking">Usps tracking</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/price-estimator">Price Estimator</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/address-validation">Address Validation</NavLink>
                    </Li>
                    <LogOutStyling>
                        <Logout />
                    </LogOutStyling>
                </LinksDiv>
            </Ul>
        </Nav>
    );
}

const LinksDiv = styled.div.attrs(props => {})`
    display: flex;
    width: 100%;
    @media (max-width: ${CONSTANTS.BP_MOBILE}) {
        flex-direction: column;
        &.hidden {
            display: none;
        }
    }

`;

const Nav = styled.nav`
    position: sticky;
    width: 100%;
    top: 0px;
    z-index: 999999999;
    `;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #090e17;
    
    @media (max-width: ${CONSTANTS.BP_MOBILE}) {
        flex-direction: column;
    }
    `;

const Li = styled.li`
    float: left;
    
    a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        /*border: 1px solid #141e30;*/
    }
    
    a:hover {
        background-color: #404856;
    }
    
    .active {
        background-color: #404856;
        color: #FFF;
        border: ;
    }

    `;

const LogOutStyling = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    
    button {
        background-color: inherit;
        color: white;
        border-style: none;
    }
`;

export default navBar;