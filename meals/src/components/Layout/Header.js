import React from "react";
import classes from "./Header.module.css"
import image from "../../image/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <div><HeaderCartButton /></div>
            </header>
            <div className={classes["mainImage"]}>
                <img src={image} alt="table full of delicious food" />
            </div>
        </React.Fragment>
    )
}

export default Header;