import UserItem from './UserItem';
import styles from './UserList.module.css';

const UserList = props => {
    return (
        props.list.map(item => {
            return (
                <ul className={styles['user-list']}>
                    <UserItem
                    key={item.id}
                    id={item.id}
                >
                    <span>
                        {`${item.name} - ${item.age} years old`}
                    </span>
                    </UserItem>
                </ul>
            );
        })
    );
}

export default UserList;