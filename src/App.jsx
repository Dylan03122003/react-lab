import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Menu from "./components/Menu.jsx";
import { DISHES } from "./data/dishes.js";

const App = () => {
  return (
    <div>
      <Navbar className="bg-primary text-white p-3">
        Ristorante Con Fusion
      </Navbar>
      <Menu dishes={DISHES} />
    </div>
  );
};

export default App;
