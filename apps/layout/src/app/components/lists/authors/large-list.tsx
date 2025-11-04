import type { Author } from '../../../data/authors';

interface LargeAuthorListProps {
    author: Partial<Author>;
}

export const LargeAuthorList: React.FunctionComponent<LargeAuthorListProps> = ({ author }: LargeAuthorListProps) => {
    return (
        <>
            <h3>{author.name}</h3>
            <p>{author.age} years old</p>
            <p>{author.country}</p>

            <ul>
                {author.books?.map(book => <li key={book}>{book}</li>)}
            </ul>

        </>
    )
}