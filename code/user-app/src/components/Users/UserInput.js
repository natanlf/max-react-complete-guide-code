import { useState, Fragment } from "react";
import styles from './UserInput.module.css';
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const UserInput = props => {

    const [name, setEnteredName] = useState('');
    const [age, setAge] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);
    const [error, setError] = useState();

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
        if(name.trim().length === 0) {
          setNameIsValid(false)  
        } else {
            setNameIsValid(true);
        } 
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
        age.trim().length === 0 ? setAgeIsValid(false) : setAgeIsValid(true);
    }

    const submitHandler = event => {
        event.preventDefault();
        console.log(name)
        if(name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: "Please enter a valid name and age (non-empty values)"
            })
            return;
        }

        if(+age < 1) {
            setError({
                title: 'Invalid age',
                message: "Please enter a valid age (age>0)"
            })
            return;
        }

        props.onAddUser({
            name,
            age
        }); //emit to father
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles['user-form']}>
                <form onSubmit={submitHandler}>
                    <div className={`${styles['form-control']} ${!nameIsValid && styles.invalid}`}>
                        <label>Name</label>
                        <input type="text" onChange={nameChangeHandler}/>
                    </div>
                    <div className={`${styles['form-control']} ${!ageIsValid && styles.invalid}`}>
                        <label>Age</label>
                        <input type="number" onChange={ageChangeHandler} />
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
}

export default UserInput;