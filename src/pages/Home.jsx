import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <section className="home-hero">
        <img
          className="home-hero-img"
          src="https://lereacteur-vinted.netlify.app/static/media/hero.2c66d85a1335550c4518.jpg"
          alt="home-hero-bcg"
        />
        <div className="home-hero-ready-container">
          <div className="home-hero-ready">
            <div>Prêts à faire du tri dans vos placards ?</div>
            <Link to={`/publish`}>
              <button className="header-button button-sold">
                Commencer à vendre
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="offer-cards-list">
        {data.offers.map((offer) => {
          return (
            <Link key={offer._id} to={`/offers/${offer._id}/`}>
              <div className="offer-card">
                <div className="offer-card-avatar-username">
                  {offer.owner.account.avatar && (
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      alt="owner avatar"
                    />
                  )}
                  <span>{offer.owner.account.username}</span>
                </div>
                <div className="offer-card-picture-details">
                  <img src={offer.product_image.secure_url} alt="offer image" />
                  <div className="offer-card-price-size-brand">
                    <span className="price">{offer.product_price} €</span>
                    <span className="size">
                      {offer.product_details[1].TAILLE}
                    </span>
                    <span className="brand">
                      {offer.product_details[0].MARQUE}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
