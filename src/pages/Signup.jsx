import "../App.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ handleToken, handleId }) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { email, id, password, newsletter }
      );
      handleToken(response.data.token);
      handleId(response.data._id);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Please fill in all fields");
      } else if (error.response.status === 409) {
        setErrorMessage(
          "This email already has an account, please use another one :)"
        );
      }
    }
  };

  return (
    <main>
      <div className="signup-container">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            onChange={(event) => {
              setId(event.target.value);
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
            <div>
              <input
                type="checkbox"
                checked={newsletter} // checked = ce qui est utilisé à la place de "value" pour une checkbox
                onChange={() => {
                  setNewsletter(!newsletter);
                }}
              />
              <span>S'inscrire à notre newsletter</span>
            </div>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button type="submit">S'inscrire</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
        <Link className="link-to-login" to={"/login"}>
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </div>
    </main>
  );
};

export default Signup;
