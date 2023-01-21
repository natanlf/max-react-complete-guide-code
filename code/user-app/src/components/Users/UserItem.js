import styles  from './UserItem.module.css';

const UserItem = props => {
    const onDeleteHandler = item => {
        props.onDelete(props.id);
    }

    return (
        <li className={`${styles['user-item']}`} onClick={onDeleteHandler}>
            {props.children}
        </li>
    );
}

export default UserItem;