import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/AboutComponent.jsx";
import Menu from "./components/Menu.jsx";
import { DISHES } from "./data/dishes.js";
import { LEADERS } from "./data/leaders.js";

const App = () => {
  return (
    <>
      <Navbar className="bg-primary text-white p-3">
        <Link style={{ color: "white", marginRight: "20px" }} to={"home"}>
          Home
        </Link>

        <Link style={{ color: "white" }} to={"about"}>
          About
        </Link>
      </Navbar>
      <Routes>
        <Route path="/home" element={<Menu dishes={DISHES} />} />
        <Route path="/" element={<Menu dishes={DISHES} />} />
        <Route path="/about" element={<About leaders={LEADERS} />} />
      </Routes>
    </>
  );
};

export default App;
