import React from 'react'
import { Outlet } from 'react-router-dom';
import MainNavigations from '../components/MainNavigations';
import classes from "./Root.module.css";
const RootLayout = () => {
    return (
        <>
            <MainNavigations />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout;