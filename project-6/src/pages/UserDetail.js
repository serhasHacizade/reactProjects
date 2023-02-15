import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {

    const {id} = useParams();
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect (() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res =>res.json())
        .then(data => setUser(data))
    }, [id]);
    
    const controller = (id) => {
        if (id >= 10) {
            return `/menu/users/1`
        } else {
            return `/menu/users/${Number(id) + 1}`
        }
    }
    console.log(user);
    return (
        <div className="userDetailPage">
            <h2>User Details</h2>
            {
                user && <pre>{JSON.stringify(user, null, 2)}</pre>
            }
            <div className="userDetailBtn">
                <Link className = "nextBtn" to = {controller(id)}>Next user</Link>
                <a className = "backBtn" onClick={() => navigate("/menu/users")}>Turn back</a>  
            </div>   
        </div>
    );
}

export default UserDetail;