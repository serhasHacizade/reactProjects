import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
const  ProtectedRoutes=  ({children,admin}) => {
    const {user}=useAuth() 
    const logged = localStorage.getItem("loggedIn");
    if(logged !== "true"){return <Navigate to={{pathname:'/'}}/>}
    if(admin && user?.role !=="admin" && user?.role!==undefined){return <Navigate to={{pathname:'/'}}/>}
    return children
}
export default ProtectedRoutes;