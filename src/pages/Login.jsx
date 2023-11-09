import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login"
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

  return isLoading ? <p>Loading ...</p> : <main></main>;
};

export default Login;
