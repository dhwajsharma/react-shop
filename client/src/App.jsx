import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./components/Pay";
import Success from "./components/Success";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
