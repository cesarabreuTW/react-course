export const LeftSideComponent: React.FunctionComponent<{ title: string }> = ({ title = 'Placeholder' }) => {
    return (<h2 style={{ backgroundColor: 'crimson' }}> {title}</h2>)
}
