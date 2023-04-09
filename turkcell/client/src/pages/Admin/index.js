import React from 'react';
import "./index.css";
import Home from './Home/index';
import Orders from "./Orders/index";
import Products from "./Products/index"
import { Link, Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react';
import ProductDetail from './ProductDetail';
import NewProduct from './Products/new';
const Admin = () => {
  return (
    <div>
        <nav>
            <ul className="adminMenu">
                <li>
                    <Link to="/admin">Home</Link>
                </li>
                <li>
                    <Link to="/admin/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/admin/products">Products</Link>
                </li>
            </ul>
        </nav>

        <Box mt="10">
          <Routes>
            <Route path= "/" exact element= {<Home />}/>
            <Route path= "/orders" element= {<Orders />}/>
            <Route exact path= "/products/*" element= {<Products />}/>
            <Route path= "/products/new" element= {<NewProduct />}/>
            <Route path= "/products/:product_id" element= {<ProductDetail />}/>
          </Routes>
        </Box>
    </div>
  )
}

export default Admin;