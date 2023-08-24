import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register.js";
import Carts from "./pages/Carts.js";
import Profile from "./pages/Profile.js";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileBottomNav from "./components/MobileBottomNav";
import MobileTopNav from "./components/MobileTopNav";

function App() {
  return (
    <BrowserRouter>
      <MobileTopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <MobileBottomNav />
    </BrowserRouter>
  );
}

export default App;
