import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logout from '../../common/Authentication/Logout';
import Hamburger from './Hamburger';

const navBar = () => {

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
                    <NavLink exact to="/">Home</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/usps-tracking">Usps tracking</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/price-estimator">Price Estimator</NavLink>
                    </Li>
                    <Li>
                        <NavLink to="/address-validation">Address Validation</NavLink>
                    </Li>
                    <Logout />
                </LinksDiv>
            </Ul>
        </Nav>
    );
}

const LinksDiv = styled.div.attrs(props => {})`
    display: flex;
    @media (max-width: 568px) {
        flex-direction: column;
        &.hidden {
            display: none;
        }
    }

`;

const Nav = styled.nav`
    position: sticky;
    top: 0px;
    z-index: 999999999;
`;

const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    
    @media (max-width: 568px) {
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
    }
    
    a:hover {
        background-color: #111;
    }
    
    .active {
        background-color: #fff;
        color: #300;
    }
    
    .active:hover {
        background-color: #fff;
        color: #300;
    }
    `;


export default navBar;