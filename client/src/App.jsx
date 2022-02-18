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
    <>
      <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
};

export default App;
