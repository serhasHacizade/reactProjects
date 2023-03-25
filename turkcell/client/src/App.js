import React from 'react'
import "./App.css"
import Navbar from "./components/navbar/index"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup"
import ProductDetail from "./pages/ProductDetail"
import Products from './pages/Products';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <div id="content">
                        <Routes>
                            <Route path="/" exact Component={Products} />
                            <Route path="/product/:product_id"  Component={ProductDetail} />
                            <Route path="/signin" Component={Signin} />
                            <Route path="/signup" Component={Signup} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;