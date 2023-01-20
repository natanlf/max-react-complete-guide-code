import { useState } from "react";
import styles from './UserInput.module.css';
import Card from "../../UI/Card";
import Button from "../../UI/Button";


const UserInput = props => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setAge] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [ageIsValid, setAgeIsValid] = useState(true);

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
        if(enteredName.trim().length === 0) {
          setNameIsValid(false)  
        } else {
            setNameIsValid(true);
        } 
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
        enteredAge.trim().length === 0 ? setAgeIsValid(false) : setAgeIsValid(true);
    }

    const submitHandler = event => {
        event.preventDefault();
        console.log(enteredName)
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            console.log("Formulário inválido");
            return;
        }
    }

    return (
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
    );
}

export default UserInput;