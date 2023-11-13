import { useState } from "react";
import "../App.css";
import axios from "axios";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState();
  const [pictureFromCloudinary, setPictureFromCloudinary] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("picture", picture);

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
      setPictureFromCloudinary(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="publish-main">
      <div className="publish-container">
        <h2> Vends ton article</h2>
        {/* test affichage image */}
        {pictureFromCloudinary && (
          <img src={pictureFromCloudinary} alt="test" />
        )}

        <form onSubmit={handleSubmit}>
          <section className="file-select">
            <div className="dashed-preview-without">
              <div className="input-design-default">
                <label for="file" className="label-file">
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
          </section>

          <div className="form-button-div">
            <button type="submit" className="form-validation">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
