import { useState } from "react";
import UserInput from "./UserInput";


const Users = () => {

    const [users, setUsers] = useState([]);

    const addUserHandler = user => {
        console.log(user);
        setUsers(prevUsers => {
            const updateUsers = [...prevUsers];
            updateUsers.unshift({id: Math.random().toString(), ...user});
            return updateUsers;
        });
        
    }

    return (
        <UserInput onAddUser={addUserHandler}/>
    );
}

export default Users;