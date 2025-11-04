import styled from 'styled-components';

const Container = styled.div`
display: flex;
`;
const Panel: any = styled.div`
flex: ${(props: any) => props.flex}; // TODO: fix types
`

interface SplitScreenProps {
    children: React.ReactNode[]; // It can be also an array of React.FunctionComponent
    leftWidth?: number;
    rightWidth?: number;
}

export const SplitScreenWithChildren = ({ children, leftWidth = 1, rightWidth = 1 }: SplitScreenProps) => {

    const [left, right] = children;
    return (
        <Container>
            <Panel flex={leftWidth}>
                {left}
            </Panel>
            <Panel flex={rightWidth}>
                {right}
            </Panel>
        </Container>
    )
}