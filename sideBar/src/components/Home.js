import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context/Context";

const Home = () => {
    const { openSideBar, openModal } = useGlobalContext();
    return (
        <main>
            <button onClick={openSideBar} className="sideToggle"><FaBars /></button>
            <button onClick={openModal} className="btn">Show Modal</button>
        </main>
    );
};

export default Home;
