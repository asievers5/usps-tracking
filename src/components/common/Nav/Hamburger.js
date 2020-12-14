import React from 'react';
import styled from 'styled-components';
import { BP_MOBILE } from '../../Constants/Constants'

const Hamburger = () => (
    <MobileNavContainer>
        USPS Tracker
        <HamburgerIcon>
            <span></span>
            <span></span>
            <span></span>
        </HamburgerIcon>
    </MobileNavContainer>
);


    //  TODO: Mobile nav should be part of NavBar and not in Hamburger file  
    const MobileNavContainer = styled.div`
        display: none;
        
        @media (max-width: ${BP_MOBILE}) {
            display: flex;
            align-items: center;
            justify-content: space-between;
    
            color: white;
            font-size: 1.4rem;
        }
    `;
    
    const HamburgerIcon = styled.div`
        display: none;

        @media (max-width: ${BP_MOBILE}) {
            display: flex;
            flex-direction: column;
            padding: 7px;
            color: white;

            span {
                width: 35px;
                height: 5px;
                background-color: #FFF;
                margin: 3px 0;
            }
        }
    `;


export default Hamburger;