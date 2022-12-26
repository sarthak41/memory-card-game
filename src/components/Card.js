import React, { useState, useEffect } from "react";

import "../styles/card-style.css";

const Card = (props) => {
  const [hit, setHit] = useState(false);

  const hitCard = () => {
    setHit(true);
  };

  return (
    <div className="card" onClick={hitCard}>
      <img src={props.image} alt={props.title} />
      <div className="desc-text">{props.title}</div>
    </div>
  );
};

export default Card;
