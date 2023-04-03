import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const ProtectedRoutes = ({admin}) => {
    const { loggedIn,user } = useAuth();
    const navigate = useNavigate()
    return (        
        user.role =='admin'&& admin==true ? console.log('admine giderim') : navigate('/'),

        loggedIn ? <Outlet /> : <Navigate to={{ pathname: "/" }} />
    )
}

export default ProtectedRoutes;