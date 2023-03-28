import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
    const { loggedIn } = useAuth();
    return (

        loggedIn ? <Outlet /> : <Navigate to={{ pathname: "/" }} />
    // <Route {...rest} render={(props) => {
    //     if (loggedIn) {
    //         <Component {...props} />
    //     }

    //     return <Navigate to={{ pathname: "/" }} />
    // }} />
    )
}

export default ProtectedRoutes;