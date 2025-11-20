import styles from './button.module.css';

export function Button({text, onClick}: {text: string, onClick: () => void}) {
  return (
    <button className={styles['container']} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;