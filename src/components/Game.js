import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/container-style.css";
import geraltImg from "../images/geralt-of-rivia.jpg";
import yenImg from "../images/yennefer-of-vengerberg.jpg";
import trissImg from "../images/triss.jpg";
import keiraImg from "../images/keira.webp";
import emhyrImg from "../images/emhyr.jpg";
import rocheImg from "../images/roche.webp";
import ciriImg from "../images/ciri.jpg";
import baronImg from "../images/baron.webp";
import cerysImg from "../images/cerys.webp";
import iorImg from "../images/iorveth.webp";
import lethoImg from "../images/letho.webp";
import philImg from "../images/philippa.jpg";
import uniqid from "uniqid";

const Game = () => {
  const [cards, setCards] = useState([
    {
      key: 1,
      image: geraltImg,
      title: "Geralt of Rivia",
    },
    {
      key: 2,
      image: yenImg,
      title: "Yennefer",
    },
    {
      key: 3,
      image: trissImg,
      title: "Triss Merigold",
    },
    {
      key: 4,
      image: keiraImg,
      title: "Keira Metz",
    },
    {
      key: 5,
      image: emhyrImg,
      title: "Emhyr var Emreis",
    },
    {
      key: 6,
      image: rocheImg,
      title: "Roche",
    },
    {
      key: 7,
      image: ciriImg,
      title: "Cirilla",
    },
    {
      key: 8,
      image: baronImg,
      title: "Bloody Baron",
    },
    {
      key: 9,
      image: cerysImg,
      title: "Cerys an Caite",
    },
    {
      key: 10,
      image: iorImg,
      title: "Iorveth",
    },
    {
      key: 11,
      image: lethoImg,
      title: "Letho",
    },
    {
      key: 12,
      image: philImg,
      title: "Philippa Eilhart",
    },
  ]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [hits, setHit] = useState(Array(12).fill(false));

  const incrScore = (event) => {
    setScore(score + 1);
    console.log(event.target.parentNode.parentNode);
  };

  useEffect(() => {
    if (score >= bestScore) setBestScore(score);
    const newCards = cards.sort(() => Math.random() - 0.5);
    setCards(newCards);
  }, [score, bestScore, cards]);

  const displayCards = () => {
    const cardList = cards.map((card) => (
      <li key={card.key} onClick={incrScore}>
        <Card image={card.image} title={card.title} />
      </li>
    ));
    return <ul>{cardList}</ul>;
  };

  return (
    <>
      <div>
        <div>Score: {score}</div>
        <div>Best: {bestScore}</div>
      </div>
      <div className="card-container">{displayCards()}</div>
    </>
  );
};

export default Game;
