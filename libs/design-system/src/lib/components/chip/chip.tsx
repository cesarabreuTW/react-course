import styles from './chip.module.css';

export interface ChipProps {
  label: string;
  color?: 'blue' | 'green' | 'red' | 'purple';
}

export function Chip({ label, color = 'blue' }: ChipProps) {
  const baseClass = styles.container;
  const colorClass = styles[`container-${color}`];
  return (
    <span className={`${baseClass} ${colorClass}`}>
      {label}
    </span>
  );
}

export default Chip;
