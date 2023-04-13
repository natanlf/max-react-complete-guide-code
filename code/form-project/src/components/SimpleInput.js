import { useState } from 'react';

const SimpleInput = (props) => {

  const [name, setName] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = name.trim() != '';
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  let formIsValid = false;

  if(nameIsValid) {
    formIsValid = true;
  }
  
  /* every time that this input changes, the component will be re-executed, because of this nameIsValid will be always the current value */
  const nameInputChangeHandler = event => {
    console.log(event.target.value)
    setName(event.target.value);
  }

  const nameBluerHandler = event => {
    setNameIsTouched(true);
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setNameIsTouched(true);
    
    if(!nameIsValid) {
      return;
    }

    console.log(name);

    setName('');
    setNameIsTouched(false);
  }

  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid': 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={nameInputChangeHandler} 
          type='text' id='name' value={name}
          onBlur={nameBluerHandler} />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
