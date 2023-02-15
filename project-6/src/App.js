import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Contact from "./pages/Contact"
import Menu from "./components/Menu";
import UserDetail from "./pages/UserDetail";
import Error from "./pages/Error"

const App = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route index element= {<Login/>} />
                <Route path='/menu' element={<Menu/>}>
                    <Route path="home" element = {<Home/>}/>
                    <Route path = "users" element = {<Users/>}/>
                    <Route path = "users/:id" element = {<UserDetail/>}/>
                    <Route path = "contact" element = {<Contact/>}/>
                </Route>
                <Route path="*" element = {<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;