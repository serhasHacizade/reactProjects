import React from "react"
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Button } from "@chakra-ui/react";

const index = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className="logo">
                    <Link to="/">eCommerce</Link>
                </div>
                <ul className={styles.menu}>
                    <Link to="/">Products</Link>
                </ul>
            </div>

            <div className= {styles.right}>
                <Link to="/signin">
                    <Button colorScheme="blue">Login</Button>
                </Link>
                <Link to="/signup">
                    <Button colorScheme="blue">Register</Button>
                </Link>
            </div>

        </nav>
    )
}

export default index