import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  return (
    <div className="header-container">
      <Link to={`/`}>
        <div>
          <img
            className="header-logo"
            src="https://lereacteur-vinted.netlify.app/static/media/logo.10b0caad793dd0a8ea72.png"
            alt="logo-vinted"
          />
        </div>
      </Link>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Recherche des articles"
        />
        <i className="fa-solid fa-magnifying-glass search-input-icon"></i>
      </div>
      {token ? (
        <button
          className="header-button button-logout"
          onClick={() => {
            handleToken(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <div>
          <Link to={`/signup`}>
            <button className="header-button button-login-signup button-signup">
              S'inscrire
            </button>
          </Link>
          <Link to={`/login`}>
            <button className="header-button button-login-signup">
              Se connecter
            </button>
          </Link>
        </div>
      )}
      <Link to={`/publish`}>
        <button className="header-button button-sold">
          Vends tes articles
        </button>
      </Link>
    </div>
  );
};

export default Header;
