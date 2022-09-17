import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Memberships from "./Pages/Memberships/Memberships";
import Shop from "./Pages/Shop/Shop";
import Signup from "./Pages/Signup/Signup";
import Staff from "./Pages/Staff/Staff";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/shops" element={<Shop />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
