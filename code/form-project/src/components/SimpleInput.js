import { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {

  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  useEffect(() => {
    if(nameIsValid) {
      console.log('Name is valid');
    } else {
      console.log('Name is invalid');
    }
  }, [name])

  const nameInputRef = useRef();

  const nameInputChangeHandler = event => {
    console.log(event.target.value)
    setName(event.target.value);
    //console.log(nameInputRef.current.value);
  }

  const nameBluerHandler = event => {
    setNameIsTouched(true);

    if(name.trim() === '') {
      setNameIsValid(false);
      return;
    }
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setNameIsTouched(true);
    
    if(name.trim() === '') {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);
    console.log(name);

    setName('');
  }

  const nameInputIsInvalid = !nameIsValid && nameIsTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid': 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} 
          onChange={nameInputChangeHandler} 
          type='text' id='name' value={name}
          onBlur={nameBluerHandler} />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
