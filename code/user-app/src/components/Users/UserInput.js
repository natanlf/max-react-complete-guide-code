import { useState } from "react";
import './UserInput.css';
import Card from "../../UI/Card";
import Button from "../../UI/Button";


const UserInput = props => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setAge] = useState('');

    const nameChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
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
        <Card className="user-form">
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" onChange={nameChangeHandler}/>
                    <label>Age</label>
                    <input type="number" onChange={ageChangeHandler} />
                </div>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
}

export default UserInput;