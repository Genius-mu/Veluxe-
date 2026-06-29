import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
