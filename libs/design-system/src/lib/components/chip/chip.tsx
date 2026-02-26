import styles from './chip.module.css';

export interface ChipProps {
  label: string;
  color?: 'blue' | 'green' | 'red' | 'purple';
}

export function Chip({ label, color = 'blue' }: ChipProps) {
  return (
    <span className={styles['container']}>
      {label}
    </span>
  );
}

export default Chip;
