import React from "react"
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../Context/AuthContext";
import { useBasket } from "../../Context/BasketContext";

const Navbar = () => {

    const { loggedIn, user } = useAuth();
    const { items } = useBasket();
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
                        {
                            items.length > 0 && (
                                <Link to="/basket">
                                    <Button colorScheme="pink" variant="outline">
                                        Basket({items.length})
                                    </Button>
                                </Link>
                            )
                        }
                        {
                            user?.role === "admin" && (
                                <Link to="/admin">
                                    <Button colorScheme="pink" variant="ghost">Admin</Button>
                                </Link>
                            )
                        }
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