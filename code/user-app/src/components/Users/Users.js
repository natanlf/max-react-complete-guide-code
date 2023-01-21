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

    const onDeleteItemHandler = id => {
        setUsers(prevUsers => prevUsers.filter(item => item.id !== id));
    }

    let content = <span>The list of users is empty</span>

    if(users.length > 0) {
        content = (
            <UserList list={users} onDeleteItem={onDeleteItemHandler}/>
        );
    }

    return (
        <div>
            <UserInput onAddUser={addUserHandler}/>
            <Card>
                {content}
            </Card>
        </div>
    );
}

export default Users;