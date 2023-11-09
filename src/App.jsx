import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* Mon Header apparait sur toutes les pages */}
      <Header />
      {/* Le composant Routes doit contenir toutes mes routes, il affiche un seul de ses enfants à la fois */}
      <Routes>
        {/* path=chemin element=le composant à afficher si l'url correspond au chemin */}
        <Route path="/" element={<Home />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
