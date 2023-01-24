import { useState, Fragment, useRef } from "react";
import styles from './UserInput.module.css';
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const UserInput = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const submitHandler = event => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;

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

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={styles['user-form']}>
                <form onSubmit={submitHandler}>
                    <div className={`${styles['form-control']}`}>
                        <label>Name</label>
                        <input type="text" ref={nameInputRef}/>
                    </div>
                    <div className={`${styles['form-control']}`}>
                        <label>Age</label>
                        <input type="number" ref={ageInputRef}/>
                    </div>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
}

export default UserInput;