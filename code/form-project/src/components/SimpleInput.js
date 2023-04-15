import { useState } from 'react';
import useInput from '../hooks/user-input';

const SimpleInput = (props) => {

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== "")


  const [email, setEmail] = useState('');
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const emailIsValid = email.includes('@');
  const emailInputIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = false;

  if(nameIsValid && emailIsValid) {
    formIsValid = true;
  }
  
  /* every time that this input changes, the component will be re-executed, because of this nameIsValid will be always the current value */
  const emailInputChangeHandler = event => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }


  const emailBlurHandler = event => {
    setEmailIsTouched(true);
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    
    if(!nameIsValid) {
      return;
    }

    resetNameInput();
    
    setEmail('');
    setEmailIsTouched(false);
  }

  
  const nameInputClasses = nameInputHasError ? 'form-control invalid': 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid': 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={nameChangeHandler} 
          type='text' id='name' value={name}
          onBlur={nameBlurHandler} />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your email</label>
        <input
          onChange={emailInputChangeHandler} 
          type='email' id='email' value={email}
          onBlur={emailBlurHandler} />
        {emailInputIsInvalid && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
