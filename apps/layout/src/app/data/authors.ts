export interface Author {
    id: number;
    name: string;
    age: number;
    country: string;
    bio: string;
    books: string[];
}

export const authors: Author[] = [
    {
        id: 1,
        name: "Jane Austen",
        age: 41,
        country: "England",
        bio: "English novelist known for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.",
        books: ["Pride and Prejudice", "Sense and Sensibility", "Emma"]
    },
    {
        id: 2,
        name: "Gabriel García Márquez",
        age: 87,
        country: "Colombia",
        bio: "Colombian novelist, short-story writer, and journalist, known as one of the most significant authors of the 20th century and one of the best in the Spanish language.",
        books: ["One Hundred Years of Solitude", "Love in the Time of Cholera", "Chronicle of a Death Foretold"]
    },
    {
        id: 3,
        name: "Haruki Murakami",
        age: 74,
        country: "Japan",
        bio: "Japanese writer whose works blend elements of fantasy and reality, often featuring recurring themes of alienation and loneliness.",
        books: ["Norwegian Wood", "Kafka on the Shore", "1Q84"]
    }
];

