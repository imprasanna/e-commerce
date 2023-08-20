import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register.js";
import Carts from "./pages/Carts.js";
import Profile from "./pages/Profile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <BrowserRouter>
      <MobileNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
