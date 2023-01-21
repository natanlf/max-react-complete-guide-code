import { useState } from "react";
import UserInput from "./UserInput";
import UserList from "./UserList";
import Card from '../../UI/Card';

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
        <div>
            <UserInput onAddUser={addUserHandler}/>
            <Card>
                <UserList list={users}/>
            </Card>
        </div>
    );
}

export default Users;