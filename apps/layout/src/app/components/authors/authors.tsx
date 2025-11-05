import styles from './authors.module.css';

export function Authors({ authors }: { authors?: Record<string, any>[] }) {
  return authors ?(
    <div className={styles['container']}>
      {authors.map((author) => (
        <div key={author.id}>
          <h2>{author.name}</h2>
          <p>{author.bio}</p>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default Authors;
