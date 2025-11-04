
export const RightSideComponent: React.FunctionComponent<{ title: string }> = ({ title = 'Placeholder' }) => {
    return (<h2 style={{ backgroundColor: 'coral' }}>{title}</h2>)
}