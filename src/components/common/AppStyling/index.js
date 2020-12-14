import React from 'react';
import styled from 'styled-components';
import * as CONSTANTS from '../../Constants/Constants';

const AppStyling = (props) => {

    return (
        <>
            <Container>
                <Item />
                    <ItemCenter>
                        {props.children}
                    </ItemCenter>
                <Item />
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    height: 100%;
    color: white;
    `;

const Item = styled.div`
    width: 10vw;
    background-color: ${CONSTANTS.COL_LIGHTBLUE};
    
    @media (max-width: ${CONSTANTS.BP_MOBILE}) {
        display: none;
    }
    `;

const ItemCenter = styled(Item)`
    flex-grow: 1;
    background-color: ${CONSTANTS.COL_LIGHTBLUE};
    padding-top: 5%;
    @media (max-width: ${CONSTANTS.BP_MOBILE}) {
        padding: 10px;
        display: block;
    }
`;


export default AppStyling;