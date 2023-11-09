import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;
  // console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main className="offer-body">
      <div className="offer-container">
        <div>
          <img
            className="offer-picture"
            src={data.product_image.secure_url}
            alt="offer-picture"
          />
        </div>
        <div className="offer-infos">
          <div className="offer-infos-top">
            <span className="offer-price">{data.product_price} €</span>
            <ul className="offer-infos-list">
              {data.product_details.map((detail) => {
                // console.log(detail);
                const clefs = Object.keys(detail);
                console.log(clefs);
                const clef = clefs[0];
                console.log(clef);
                return (
                  <li key={clef}>
                    <span>{clef}</span>
                    <span>{detail[clef]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="divider"></div>
          <div className="offer-content">
            <p className="name">{data.product_name}</p>
            <p className="description">{data.product_description}</p>
            <div className="offer-avatar-username">
              {data.owner.account.avatar && (
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt="owner avatar"
                />
              )}
              <span>{data.owner.account.username}</span>
            </div>
          </div>
          <button>Acheter</button>
        </div>
      </div>
    </main>
  );
};

export default Offer;
