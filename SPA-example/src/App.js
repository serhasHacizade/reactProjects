import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import Products from './pages/Products';
import RootLayout from './pages/Root';
import Error from "./pages/Error";
import ProductsDetail from './pages/ProductsDetail';

// * u can use this alternative way
// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routerDefinitions);

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:productId", element: <ProductsDetail /> }
    ]
  },
]);
const App = () => {
  return (<RouterProvider router={router} />);
}
export default App;
