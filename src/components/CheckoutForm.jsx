import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ title, price, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const stripe = useStripe();

  const elements = useElements();

  //   const id = id.toString();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: id,
      });

      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: price,
        }
      );
      console.log(id, stripeToken, title, price);
      console.log(response.data);

      if (response.data.status === "succeeded") {
        setSucceeded(true);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="stripe-form" onSubmit={handleSubmit}>
      <CardElement />

      {succeeded ? (
        <p>Paiement validé</p>
      ) : (
        <input
          className="stripe-submit"
          type="submit"
          value="Pay"
          disabled={isLoading}
        />
      )}
    </form>
  );
};

export default CheckoutForm;
