import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/Product";
import JournalPage from "./pages/Journal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </>
  );
}

export default App;
