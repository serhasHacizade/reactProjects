import Home from "../pages/Home";
import Users from "../pages/Users";
import { Link, Outlet } from "react-router-dom";
const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link to = "home">Home</Link>
                </li>
                <li>
                    <Link to = "users">Users</Link>
                </li>
                <li>
                    <Link to = "contact">Contact</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Menu;