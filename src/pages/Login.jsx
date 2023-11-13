import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="signup-container">
        <h2>Se connecter</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
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
          <button type="submit">Se connecter</button>
        </form>
        <Link className="link-to-login" to={"/signup"}>
          Pas encore de compte ? Inscris-toi !
        </Link>
      </div>
    </main>
  );
};

export default Login;
