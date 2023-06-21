import React from "react";
import "../styles/card.css";

const Card = (props) => {
  return (
    <div className="info_container">
      <img src={props.img} alt="Boton_musica" />
    </div>
  );
};

export default Card;
