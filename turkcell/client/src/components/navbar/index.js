import React from "react"
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {

    const { loggedIn } = useAuth();
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/">eCommerce</Link>
                </div>
                <ul className={styles.menu}>
                    <Link to="/">Products</Link>
                </ul>
            </div>

            <div className={styles.right}>
                {
                    !loggedIn &&
                    <>
                        <Link to="/signin">
                            <Button colorScheme="blue">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button colorScheme="blue">Register</Button>
                        </Link>
                    </>
                }
                {
                    loggedIn &&
                    <>
                        <Link to="/profile">
                            <Button colorScheme="blue">Profile</Button>
                        </Link>
                    </>
                }
            </div>

        </nav>
    )
}

export default Navbar;