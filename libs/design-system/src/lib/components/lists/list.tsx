// import type { Author } from "../../data/authors";
// import type { Book } from "../../data/books";

// interface ListProps {
//     items: Author[] | Book[];
//     sourceName: string;
//     ItemComponent: React.FunctionComponent<any>; // TODO: fix this type
// }

// export const List: React.FunctionComponent<ListProps> = ({ items, sourceName, ItemComponent }: ListProps) => {
//     return (
//         <>
//             {items.map((item: Author | Book, i: number) => (
//                 <ItemComponent key={i} {...{ [sourceName]: item }} /> // TODO: understand this syntax
//             ))}
//         </>
//     )
// }

/**
 Explanation of the syntax:

 {...{ [sourceName]: item }}

This combines three JavaScript/JSX features:
1. Computed Property Names - [sourceName]
This creates an object with a dynamic property name based on the value of sourceName:

const sourceName = "author";
const item = { name: "John", age: 30 };

// This:
{ [sourceName]: item }

// Becomes this:
{ author: { name: "John", age: 30 } }

2. Object Spread - {...}
This spreads the properties of the object into the new object:
const obj = { name: "John", age: 30 };
{ ...obj } // { name: "John", age: 30 }

3. JSX Spread Attributes - {...{ [sourceName]: item }}
This spreads the properties of the object into the JSX element:
<ItemComponent {...{ [sourceName]: item }} />
// Becomes this:
<ItemComponent author={{ name: "John", age: 30 }} />

So, the full expression:
{...{ [sourceName]: item }}
// Becomes this:
<ItemComponent author={{ name: "John", age: 30 }} />

 */