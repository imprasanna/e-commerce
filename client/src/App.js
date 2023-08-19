import Home from "./pages/Home";
import Login from "./pages/Login";
import MobileNav from "./components/MobileNav";
import Register from "./pages/Register.js";
import Carts from "./pages/Carts.js";
import Profile from "./pages/Profile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;
