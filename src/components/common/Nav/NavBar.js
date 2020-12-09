import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logout from '../../common/Authentication/Logout';


const Ul = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
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

const navBar = () => {
    return(
        <nav>
            <Ul>
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
            </Ul>
        </nav>
    );
}

export default navBar;