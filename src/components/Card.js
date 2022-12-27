import React from "react";

import "../styles/card-style.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="desc-text">{props.title}</div>
    </div>
  );
};

export default Card;
