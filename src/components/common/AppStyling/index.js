import React, { Fragment } from 'react';
import styled from 'styled-components'

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
    height: 100vh;
`;

const Item = styled.div`
    width: 10vw;
    background-color: lightcoral;
`;

const ItemCenter = styled(Item)`
    flex-grow: 1;
    background-color: lightgreen;
`;


export default AppStyling;