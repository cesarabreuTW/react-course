import { Chip } from '@react-course/design-system';
import styles from './book.module.css';

export function Book({ book }: { book: Record<string, any> }) {
  return (
    <section className={styles['container']}>
      <section id="cover">
        <img src={book.cover} alt={book.title} />
      </section>
      <section id="details">
        <h2>{book.title}</h2>
        <h3>Released in {book.year}</h3>
        <h3>Description</h3>
        <p>{book.description}</p>
        <p>This book has {book.pages} pages.</p>
        <Chip label={'Pepito has a car race'} color='purple' />
      </section>
    </section>
  );
}

export default Book;
