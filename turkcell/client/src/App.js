import React from 'react'
import "./App.css"
import Navbar from "./components/navbar/index"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup"
import ProductDetail from "./pages/ProductDetail"
import Products from './pages/Products';
import Profile from './pages/Profile';
import ProtectedRoutes from './pages/ProtectedRoute';
import Basket from './pages/Basket';
import Error404 from "./pages/Error404"
import Admin from './pages/Admin';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Navbar />
                    <div id="content">
                        <Routes>
                            <Route path="/" exact element={<Products />} />
                            <Route path="/product/:product_id" element={<ProductDetail />} />
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/basket" element={<Basket />} />
                            <Route path="/profile" element={<ProtectedRoutes ><Profile /></ProtectedRoutes>} ></Route>
                            <Route path="/admin/*" element={<ProtectedRoutes admin={true}><Admin /></ProtectedRoutes>} ></Route>
                            <Route path="*" element={<Error404 />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;