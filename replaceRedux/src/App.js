import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

const App = (props) => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" component={<ProductsPage />} exact />
          <Route path="/favorites" component={<FavoritesPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
