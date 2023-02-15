import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    },[])


    return (
        <div className="usersPage">
            <h2>Users</h2>
            <ul className="usersList">
                {users.map((person) => (
                    <li key={person.id}>
                        <Link to = {`${person.id}`}>{person.name}</Link>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default Users;