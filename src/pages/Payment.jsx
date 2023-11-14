import "../App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ id }) => {
  const location = useLocation();
  const { title, price } = location.state;
  let totalPrice = price + 0.59 + 1.18;
  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <div className="payment-card summary">
          <div className="title">Résumé de la commande</div>
          <div className="content">
            <ul>
              <li>
                Commande <span>{price} $</span>
              </li>
              <li>
                Frais protection acheteurs<span>0.59 €</span>
              </li>
              <li>
                Frais de port <span>1.18 €</span>
              </li>
            </ul>
          </div>
          <div className="divider"></div>
          <div className="content">
            <ul>
              <li className="bold">
                Total <span>{totalPrice} €</span>
              </li>
            </ul>
          </div>
          <div className="payment-card">
            <div className="content">
              Il ne vous reste plus qu'un étape pour vous offrir
              <span className="bold">{title}</span>. Vous allez payer{" "}
              <span className="bold">{totalPrice} €</span> (frais de protection
              et frais de port inclus).
            </div>
            <div className="divider"></div>
            <Elements stripe={stripePromise}>
              <CheckoutForm title={title} price={totalPrice} id={id} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
