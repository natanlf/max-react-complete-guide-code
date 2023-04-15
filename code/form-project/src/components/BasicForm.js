import useInput from "../hooks/user-input";

const BasicForm = (props) => {

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(value => value.trim() !== "")

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(value => value.trim() !== "")

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'))

  let formIsValid = false;

  if(firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    if(!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const firstNameInputClasses = firstNameHasError ? 'form-control invalid': 'form-control';
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid': 'form-control';
  const EmailInputClasses = emailHasError ? 'form-control invalid': 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName'
          value={firstName} 
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler} />
          {firstNameHasError && (
            <p className={firstNameInputClasses}>First name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='lastName' 
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}/>
          {lastNameHasError && (
            <p className={lastNameInputClasses}>Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='email'
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler} />
        {emailHasError && (
          <p className={EmailInputClasses}>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
