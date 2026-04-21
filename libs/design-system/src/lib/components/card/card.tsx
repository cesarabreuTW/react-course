import styles from './card.module.css';

interface CardProps {
  header?: string;
  footer?: string;
  children?: React.ReactNode;
}


function CardHeader({header}: Pick<CardProps, 'header'>) {
  return (
    <div className={styles['header']}>
      <h2>{header}</h2>
    </div>
  );
}

function CardFooter({footer}: Pick<CardProps, 'footer'>) {
  return (
    <div className={styles['footer']}>
      <p>{footer}</p>
    </div>
  );
}


export function Card({header, footer, children}: CardProps) {
  return (
    <div className={styles['container']}>
     {header && <CardHeader header={header} />}
     {children}
     {footer && <CardFooter footer={footer} />}
    </div>
  );
}

export default Card;
