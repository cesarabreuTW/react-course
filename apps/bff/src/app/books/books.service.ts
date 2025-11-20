import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interfaces/book';

@Injectable()
export class BooksService {
  private books: Book[] = [
    // Jane Austen's books (authorId: 1)
    {
      id: '1',
      title: 'Pride and Prejudice',
      authorId: 1,
      pages: 432,
      year: 1813,
      cover: 'https://images.isbndb.com/covers/9197163482238.jpg',
      description:
        'A romantic novel following the emotional development of Elizabeth Bennet as she learns about the repercussions of hasty judgments.',
    },
    {
      id: '2',
      title: 'Sense and Sensibility',
      authorId: 1,
      pages: 352,
      year: 1811,
      cover: 'https://images.isbndb.com/covers/9198603482238.jpg',
      description:
        "The story of the Dashwood sisters, Elinor and Marianne, who represent 'sense' and 'sensibility' respectively.",
    },
    {
      id: '3',
      title: 'Emma',
      authorId: 1,
      pages: 474,
      year: 1815,
      cover: 'https://images.isbndb.com/covers/4555933482736.jpg',
      description:
        'A comedy of manners following Emma Woodhouse, a clever and wealthy young woman who meddles in the romantic affairs of others.',
    },

    // Gabriel García Márquez's books (authorId: 2)
    {
      id: '4',
      title: 'One Hundred Years of Solitude',
      authorId: 2,
      pages: 417,
      year: 1967,
      cover: 'https://images.isbndb.com/covers/5906633482849.jpg',
      description:
        'A landmark novel telling the multi-generational story of the Buendía family in the fictional town of Macondo.',
    },
    {
      id: '5',
      title: 'Love in the Time of Cholera',
      authorId: 2,
      pages: 368,
      year: 1985,
      cover: 'https://images.isbndb.com/covers/5126273482238.jpg',
      description:
        'A love story that follows Florentino Ariza and Fermina Daza over more than fifty years.',
    },
    {
      id: '6',
      title: 'Chronicle of a Death Foretold',
      authorId: 2,
      pages: 120,
      year: 1981,
      cover: 'https://images.isbndb.com/covers/12715163482686.jpg',
      description:
        'A novella exploring the murder of Santiago Nasar, told through multiple perspectives in a non-linear narrative.',
    },

    // Haruki Murakami's books (authorId: 3)
    {
      id: '7',
      title: 'Norwegian Wood',
      authorId: 3,
      pages: 296,
      year: 1987,
      cover: 'https://images.isbndb.com/covers/10577053482223.jpg',
      description:
        'A nostalgic story of loss and coming of age, set in Tokyo during the late 1960s.',
    },
    {
      id: '8',
      title: 'Kafka on the Shore',
      authorId: 3,
      pages: 480,
      year: 2002,
      cover: 'https://images.isbndb.com/covers/11029793482223.jpg',
      description:
        'A metaphysical reality novel featuring two parallel storylines that eventually intersect.',
    },
    {
      id: '9',
      title: '1Q84',
      authorId: 3,
      pages: 928,
      year: 2009,
      cover: 'https://images.isbndb.com/covers/12294373482845.jpg',
      description:
        'A complex novel set in Tokyo during 1984, where two characters find themselves in an alternate reality they call 1Q84.',
    },
  ];

  create(book: CreateBookDto) {
    const newBook: Book = {
      id: randomUUID(),
      ...book,
    };
    return this.books.push(newBook);
  }

  findAll() {
    return this.books;
  }

  findOne(id: string) {
    const bookId = this.books.find((book: Book) => book.id === id);
    if (!bookId) {
      throw new NotFoundException(`El libro con id ${id} no existe`);
    }
    return bookId;
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: string) {
    return `This action removes a #${id} book`;
  }
}
