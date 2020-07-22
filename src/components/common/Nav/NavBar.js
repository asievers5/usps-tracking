import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const navBar = () => {
    return(
        <nav>
            <Ul>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/usps-tracking">Usps tracking</Link>
                </Li>
                <Li>
                    <Link to="/price-estimator">Price Estimator</Link>
                </Li>
                <Li>
                    <Link to="/address-validation">Address Validation</Link>
                </Li>
            </Ul>
        </nav>
    );
}

export default navBar;