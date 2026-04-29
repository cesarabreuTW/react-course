import { Button } from '@react-course/design-system';
import { useEffect, useState } from 'react';
import styles from './uncontrolled.module.css';

interface UncontrolledProps {
  onSubmit?: (data: {name: string, age: string}) => void;
}

export function Uncontrolled({onSubmit}: UncontrolledProps): React.ReactElement {

  /*
  A common pitfall is If you pass value without onChange, it will be impossible 
  to type into the input. When you control an input by passing some value to it, you force it to always 
  have the value you passed. So if you pass a state variable as a value but forget to update 
  that state variable synchronously during the onChange event handler, React will revert the input 
  after every keystroke back to the value that you specified.to use a single state object for all form fields, 
  which can lead to unnecessary re-renders and performance issues. Instead, we can use separate state variables
  for each field, which allows us to update only the relevant part of the state when a field changes. 
  This approach is more efficient and leads to better performance.
  */ 

    // This React.createRef() looks like @viewChild in angular.
    // const inputNameRef = React.createRef<HTMLInputElement>();
    // const inputAgeRef = React.createRef<HTMLInputElement>();

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const [error, setError] = useState<string | null> (null);

  useEffect(()=>{
    if((name && name.length < 3) || (age && age.length === 0)){
      setError('Name must be at least 3 characters and age must not be empty');
    } else {
      setError(null);
    }
  }, [name, age])

  const handleSubmit = () => {
    onSubmit?.({name, age}); // calling this here will emit those values to parent component
  }


  return (
    <div className={styles['container']}>
      <input name='name' type='text' placeholder='put your name' value={name} onChange={(e)=>{setName(e.target.value)} }/>
      <input name='age' type='number' placeholder='put your age' value={age} onChange={(e)=>{setAge(e.target.value)} }/>
      {error && <div className={styles['error']}>{error}</div>}
      <Button text="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default Uncontrolled;
