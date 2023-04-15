import { useState } from 'react';

const SimpleInput = (props) => {

  const [name, setName] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const [email, setEmail] = useState('');
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const nameIsValid = name.trim() !== '';
  const nameInputIsInvalid = !nameIsValid && nameIsTouched;

  const emailIsValid = email.includes('@');
  const emailInputIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = false;

  if(nameIsValid && emailIsValid) {
    formIsValid = true;
  }
  
  /* every time that this input changes, the component will be re-executed, because of this nameIsValid will be always the current value */
  const nameInputChangeHandler = event => {
    console.log(event.target.value)
    setName(event.target.value);
  }

  const emailInputChangeHandler = event => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const nameBlurHandler = event => {
    setNameIsTouched(true);
  }

  const emailBlurHandler = event => {
    setEmailIsTouched(true);
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
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid': 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={nameInputChangeHandler} 
          type='text' id='name' value={name}
          onBlur={nameBlurHandler} />
        {nameInputIsInvalid && (
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
