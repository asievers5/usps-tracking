import React from 'react';
import styled from 'styled-components';
import { BP_MOBILE } from '../../Constants/Constants'

const Hamburger = () => (
        <HamburgerIcon>
            <Span />
            <Span />
            <Span />
        </HamburgerIcon>
);

    const Span = styled.span`
        width: 35px;
        height: 5px;
        background-color: #FFF;
        margin: 3px 0;
    `;
    
    const HamburgerIcon = styled.div`
        display: none;

        @media (max-width: ${BP_MOBILE}) {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 7px;
            padding-bottom: 7px;
        }
    `;


export default Hamburger;