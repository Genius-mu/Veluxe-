import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/Product";
import JournalPage from "./pages/Journal";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
