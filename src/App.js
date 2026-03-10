import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

import { CartProvider } from "./contexts/CartContext";

function App() {

  return (

    <CartProvider>

      <BrowserRouter>

        <Navbar/>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>

        </Routes>

      </BrowserRouter>

    </CartProvider>

  );
}

export default App;