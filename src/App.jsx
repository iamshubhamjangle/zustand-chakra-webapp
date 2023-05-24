import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/Product/ProductDetails";
import ProductList from "./Components/Product/ProductList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/AutomaticWatch" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
