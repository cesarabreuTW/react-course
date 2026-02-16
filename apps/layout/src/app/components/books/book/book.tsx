export function Book({ book }: { book: Record<string, any> }) {
  return (
    <section style={{ display: 'flex', gap: '10px' }}>
      <section id="cover">
        <img src={book.cover} alt={book.title} />
      </section>
      <section id="details">
        <h2>{book.title}</h2>
        <h3>Released in {book.year}</h3>
        <h3>Description</h3>
        <p>{book.description}</p>
        <p>This book has {book.pages} pages.</p>
      </section>
    </section>
  );
}

export default Book;
