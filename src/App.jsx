import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

// Components
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };
  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="login" element={<Login handleToken={handleToken} />} />
        <Route path="publish" element={<Publish token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
