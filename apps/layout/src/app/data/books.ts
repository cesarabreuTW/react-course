export interface Book {
    id: number;
    title: string;
    authorId: number;
    pages: number;
    year: number;
    description: string;
}

export const books: Book[] = [
    // Jane Austen's books (authorId: 1)
    {
        id: 1,
        title: "Pride and Prejudice",
        authorId: 1,
        pages: 432,
        year: 1813,
        description: "A romantic novel following the emotional development of Elizabeth Bennet as she learns about the repercussions of hasty judgments."
    },
    {
        id: 2,
        title: "Sense and Sensibility",
        authorId: 1,
        pages: 352,
        year: 1811,
        description: "The story of the Dashwood sisters, Elinor and Marianne, who represent 'sense' and 'sensibility' respectively."
    },
    {
        id: 3,
        title: "Emma",
        authorId: 1,
        pages: 474,
        year: 1815,
        description: "A comedy of manners following Emma Woodhouse, a clever and wealthy young woman who meddles in the romantic affairs of others."
    },

    // Gabriel García Márquez's books (authorId: 2)
    {
        id: 4,
        title: "One Hundred Years of Solitude",
        authorId: 2,
        pages: 417,
        year: 1967,
        description: "A landmark novel telling the multi-generational story of the Buendía family in the fictional town of Macondo."
    },
    {
        id: 5,
        title: "Love in the Time of Cholera",
        authorId: 2,
        pages: 368,
        year: 1985,
        description: "A love story that follows Florentino Ariza and Fermina Daza over more than fifty years."
    },
    {
        id: 6,
        title: "Chronicle of a Death Foretold",
        authorId: 2,
        pages: 120,
        year: 1981,
        description: "A novella exploring the murder of Santiago Nasar, told through multiple perspectives in a non-linear narrative."
    },

    // Haruki Murakami's books (authorId: 3)
    {
        id: 7,
        title: "Norwegian Wood",
        authorId: 3,
        pages: 296,
        year: 1987,
        description: "A nostalgic story of loss and coming of age, set in Tokyo during the late 1960s."
    },
    {
        id: 8,
        title: "Kafka on the Shore",
        authorId: 3,
        pages: 480,
        year: 2002,
        description: "A metaphysical reality novel featuring two parallel storylines that eventually intersect."
    },
    {
        id: 9,
        title: "1Q84",
        authorId: 3,
        pages: 928,
        year: 2009,
        description: "A complex novel set in Tokyo during 1984, where two characters find themselves in an alternate reality they call 1Q84."
    }
];

