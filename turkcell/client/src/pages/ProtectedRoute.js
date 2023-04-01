import React from 'react';
import { useAuth } from "../Context/AuthContext";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";
const ProtectedRoutes = ({admin}) => {
    const { loggedIn,user } = useAuth();
    const navigate = useNavigate()
    return (
        // <Route
        //     render={() => {
        //         if (admin && user.role !== "admin") {
        //             return <Navigate to={{ pathname: "/" }} />
        //         }
        //         if (loggedIn) {
        //             return <Outlet />
        //         }
        //         return <Navigate to={{ pathname: "/" }} />
        //     }}
        // />

        // {
        //     if (admin && user.role !== "admin") {

        //     }
        // }
        
        
        //user.role !=='admin'&& admin==true ? <Navigate to={{ pathname: "/admin" }} /> : <Navigate to={{ pathname: "/" }} />,
        
        
        user.role =='admin'&& admin==true ? console.log('admine giderim') : navigate('/'),
        
        //     render = {
        //         if (admin && user.role !== "admin") {

        //         }
        //     }
        // //     (admin && user.role !== "admin") ? <Navigate to={{ pathname: "/" }} /> : null


        loggedIn ? <Outlet /> : <Navigate to={{ pathname: "/" }} />
    )
}

export default ProtectedRoutes;