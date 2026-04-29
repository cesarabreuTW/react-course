import { Button } from '@react-course/design-system';
import styles from './controlled.module.css';

interface ControlledProps {
 value: string;
 onChange: (value: string) => void;
 onSubmit: ({data}: { data: { [key: string]: string } }) => void;
}

function Controlled({ value, onChange, onSubmit }: ControlledProps) {

  //TODO: fix onSubmit and onChange, maybe using useState and useEffect hooks

   return (
    <form className={styles['container']} >
     <input onChange={onChange} value={value} />
     <Button text='Submit' onClick={onSubmit} />
    </form>
  )
}

export default Controlled;
