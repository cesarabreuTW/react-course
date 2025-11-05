import styles from './books.module.css';

export function Books({ books }: { books?: Record<string, any>[] }) {
  return books ?(
    <div className={styles['container']}>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.year}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Books;
