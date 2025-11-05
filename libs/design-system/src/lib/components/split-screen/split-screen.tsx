import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
`;
const Pane = styled.div`
flex: 1;
`

interface SplitScreenProps {
    Left: React.FunctionComponent,
    Right: React.FunctionComponent
}


export const SplitScreen = ({ Left, Right }: SplitScreenProps) => {
    return (
        <Container>
            <Pane>
                <Left />
            </Pane>
            <Pane>
                <Right />
            </Pane>
        </Container>
    )
}

export default SplitScreen;