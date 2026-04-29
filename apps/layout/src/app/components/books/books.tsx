import { Button, Card, Modal } from '@react-course/design-system';
import { useState } from 'react';
import { logBookData } from '../../hoc/books';
import { Book } from './book/book';
import styles from './books.module.css';

// This is the high-order component that wraps the Book component. The only thing it does is to log the book data
const HocBook = logBookData(Book);

export function Books({ books }: { books?: Record<string, any>[] }) {
  // const [showModal, setShowModal] = useState(false);
  // Change from boolean to storing the selected book ID
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  return books ? (
    <div className={styles['wrapper']}>
      {books.map((book) => (
         <Card key={book.id} header={book.title} > 
         {/* Its better to use a particular id of item insted of its array's index. 
          This is because React will render the whole list specially when items are added or removed.*/}
            <Button text="View Details" onClick={() => setSelectedBookId(book.id)} />
            <Modal shouldDisplay={selectedBookId === book.id} onClose={() => setSelectedBookId(null)} >
                {/* Learning 💡:Modal this way renders all the contents at once, so we shouldn't depend on showModal state, instead we should depend on the book id to render once  */}

                {/* <Modal shouldDisplay={showModal} onClose={() => setShowModal(false)}>
                  <img src={book.cover} alt={book.title} />
                  <h2>{book.title}</h2>
                  <h3>Released in {book.year}</h3>
                  <h3>Description</h3>
                  <p>{book.description}</p>
                  <p>This book has {book.pages} pages.</p>
                  <Button text="Close" onClick={() => setShowModal(false)} />
                </Modal> */}

                <HocBook book={book} />
                <Button text="Close" onClick={() => setSelectedBookId(null)} />
            </Modal>
         </Card>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Books;

/**
 More details about learning 💡:
 The Problem
You're using a single showModal boolean shared across all books. When you click "View Details" on any book:
- showModal becomes true for all modals (they all use the same state).
- Since the Modal is rendered inside the .map() loop, every book has its own Modal component.
- When showModal is true, all modals render, and they stack/overlap.
The Solution
- Track which specific book's modal should be shown by storing the book ID (or null when closed) instead of a boolean.
 */
