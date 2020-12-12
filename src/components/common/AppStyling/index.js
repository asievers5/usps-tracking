import React, { Fragment } from 'react';
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
`;

const Item = styled.div`
    width: 10vw;
    background-color: lightcoral;

    @media (max-width: ${CONSTANTS.BP_MOBILE}) {
        display: none;
    }
`;

const ItemCenter = styled(Item)`
    flex-grow: 1;
    background-color: lightgreen;

    @media (max-width: ${CONSTANTS.BP_MOBILE}) {
        display: block;
    }
`;


export default AppStyling;