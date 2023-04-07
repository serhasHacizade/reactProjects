import React from 'react';
import "./index.css";
import Home from './Home/index';
import Orders from "./Orders/index";
import Products from "./Products/index"
import { Link, Route, Routes } from 'react-router-dom'
import { Box } from '@chakra-ui/react';
const Admin = () => {
  return (
    <div>
        <nav>
            <ul className="adminMenu">
                <li>
                    <Link to="/admin">ben böyle dersin mk</Link>
                </li>
                <li>
                    <Link to="/admin/orders">ben böyle dersin mk</Link>
                </li>
                <li>
                    <Link to="/admin/products">ben böyle dersin mk</Link>
                </li>
            </ul>
        </nav>

        <Box mt="10">
          <Routes>
            <Route path= "/" exact element= {<Home />}/>
            <Route path= "/orders" element= {<Orders />}/>
            <Route path= "/products" element= {<Products />}/>            
          </Routes>
        </Box>
    </div>
  )
}

export default Admin;