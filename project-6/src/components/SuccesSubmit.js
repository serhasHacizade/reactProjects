import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SuccesSubmit = () => {
    const navigate = useNavigate()
    useEffect(() => {
        let interval = setInterval(() => { navigate("/menu/home") }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>User is successfully logged in</div>
    );
}
export default SuccesSubmit;