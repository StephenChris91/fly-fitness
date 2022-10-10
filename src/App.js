import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Equipments from "./Pages/Equipments/Equipments";
import Shop from "./Pages/Shop/Shop";
import Signup from "./Pages/Signup/Signup";
import Staff from "./Pages/Staff/Staff";

//components

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </div>
  );
}

export default App;
