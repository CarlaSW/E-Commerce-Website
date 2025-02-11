import { useState } from "react";
import SigninPage from "./pages/SigninPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignupPage";
import "./app.css";
import Homepage from "./pages/Homepage";
import Provider from "./context/Provider";
import Signin from "./components/Signin";
import CategoryPage from "./pages/CategoryPage";
import BrandPage from "./pages/BrandPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SigninPage />}></Route>
            <Route path="/signUp" element={<SignUpPage />}></Route>
            <Route path="/homepage" element={<Homepage />}></Route>
            <Route path="/category/:id" element={<CategoryPage />}></Route>
            <Route path="/brand/:id" element={<BrandPage />}></Route>
            <Route path="/product/:id" element={<ProductPage />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/wishlist" element={<WishlistPage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
