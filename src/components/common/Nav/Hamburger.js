import React from 'react';
import styled from 'styled-components';

const Hamburger = () => (
        <HamburgerIcon>
            <Span />
            <Span />
            <Span />
        </HamburgerIcon>
);

    /*
    const Span = styled.span`
    display: block;
    margin:4px;
    height: 9px;
    width:60px;
    background: #d3531a;
    border-radius: 9px;
    `;
    */

    const Span = styled.span`
        width: 35px;
        height: 5px;
        background-color: #FFF;
        margin: 3px 0;
    `;
    
    const HamburgerIcon = styled.div`
        display: none;

        @media (max-width: 568px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `;


export default Hamburger;