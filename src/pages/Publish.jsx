import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  //   const [pictureFromCloudinary, setPictureFromCloudinary] = useState();

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("picture", picture);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("condition", condition);
      formData.append("color", color);
      formData.append("city", city);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      navigate("/");
      //   setPictureFromCloudinary(response.data.secure_url);
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setErrorMessage("Une photo, un titre et un prix sont nécessaires");
      }
    }
  };

  return (
    <>
      {token ? (
        <div className="publish-main">
          <div className="publish-container">
            <h2>Vends ton article</h2>

            <form onSubmit={handleSubmit}>
              <section className="file-select">
                {/* test affichage image */}
                {/* {pictureFromCloudinary && (
              <img src={pictureFromCloudinary} alt="test" />
            )} */}
                <div className="dashed-preview-without">
                  <div className="input-design-default">
                    <label htmlFor="file" className="label-file">
                      <span className="input-sign">+</span>
                      <span>Ajoute une photo</span>
                    </label>
                    <input
                      className="input-file"
                      type="file"
                      onChange={(event) => {
                        setPicture(event.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </section>
              <section className="text-input-section">
                <div className="text-input">
                  <h4>Titre</h4>
                  <input
                    type="text"
                    placeholder="ex: Chemise Sézanne verte"
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value);
                    }}
                  />
                </div>
                <div className="text-input">
                  <h4>Décris ton article</h4>
                  <input
                    type="text"
                    placeholder="ex: porté quelquefois, taille correctement"
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value);
                    }}
                  />
                </div>
              </section>
              <section className="text-input-section">
                <div className="text-input">
                  <h4>Marque</h4>
                  <input
                    type="text"
                    placeholder="ex: Zara"
                    value={brand}
                    onChange={(event) => {
                      setBrand(event.target.value);
                    }}
                  />
                </div>
                <div className="text-input">
                  <h4>Taille</h4>
                  <input
                    type="text"
                    placeholder="ex: L / 40 /12"
                    value={size}
                    onChange={(event) => {
                      setSize(event.target.value);
                    }}
                  />
                </div>
                <div className="text-input">
                  <h4>Couleur</h4>
                  <input
                    type="text"
                    placeholder="ex: Fushia"
                    value={color}
                    onChange={(event) => {
                      setColor(event.target.value);
                    }}
                  />
                </div>
                <div className="text-input">
                  <h4>État</h4>
                  <input
                    type="text"
                    placeholder="ex: Neuf avec étiquette"
                    value={condition}
                    onChange={(event) => {
                      setCondition(event.target.value);
                    }}
                  />
                </div>
                <div className="text-input">
                  <h4>City</h4>
                  <input
                    type="text"
                    placeholder="ex: Paris"
                    value={city}
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                  />
                </div>
              </section>
              <section className="text-input-section">
                <div className="text-input">
                  <h4>Prix</h4>
                  <input
                    type="text"
                    placeholder="0,00 €"
                    value={price}
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                  />
                </div>
              </section>

              <div className="form-button-div">
                <button type="submit" className="form-validation">
                  Ajouter
                </button>
              </div>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </form>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Publish;
