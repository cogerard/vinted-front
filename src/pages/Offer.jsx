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
    <main>
      <img src={data.product_image.secure_url} alt="" />
      <p>{data.product_price} €</p>
      {data.product_details.map((detail) => {
        console.log(detail);
        const clefs = Object.keys(detail);
        console.log(clefs);
        const clef = clefs[0];
        console.log(clef);
        return (
          <p key={clef}>
            {clef} : {detail[clef]}
          </p>
        );
      })}
    </main>
  );
};

export default Offer;
