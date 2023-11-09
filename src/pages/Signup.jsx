import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <main>
      <div className="signup-container">
        <h2>S'inscrire</h2>
        <form className="signup-form">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              newsletter={newsletter}
              onChange={() => {
                setNewsletter(!newsletter);
              }}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <input type="submit" value="S'inscrire" />
        </form>
      </div>
    </main>
  );
};

export default Signup;
