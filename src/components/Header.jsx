import { Link } from "react-router-dom";

const Header = () => {
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
        {/* <div className="filter-container">
          <div className="filters">
            <span>Trier par prix</span>
            <span className="checkbox">
              <input type="checkbox" name="price" />
              <div className="wrapper">
                <div className="knob">
                  <span>⇡</span>
                </div>
              </div>
            </span>
            <span>Prix entre :</span>
            <div className="slider-container">
              <div className="slider-line">
                <div> SLIDER </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
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
      <button className="header-button button-sold">Vends tes articles</button>
    </div>
  );
};

export default Header;
