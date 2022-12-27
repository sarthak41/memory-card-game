import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/game-style.css";
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

  const cardCount = cards.length;
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [hits, setHits] = useState([]);
  const [lost, setLost] = useState(false);
  const [won, setWon] = useState(false);
  const [first, setFirst] = useState(false);

  const reset = () => {
    setScore(0);
    setHits([]);
    setLost(false);
    setWon(false);
  };

  const incrScore = (card) => {
    if (hits.includes(card)) {
      setLost(true);
    } else {
      setHits([...hits, card]);
      setScore(score + 1);
    }
  };

  useEffect(() => {
    const newCards = cards.sort(() => Math.random() - 0.5);
    setCards(newCards);

    if (score === cardCount) {
      setWon(true);
    }
    if (score >= bestScore) setBestScore(score);
  }, [score, bestScore, cards, cardCount]);

  useEffect(() => {
    if (first === false) {
      const newCards = cards.sort(() => Math.random() - 0.5);
      setCards(newCards);
      setFirst(true);
    }
  }, [first, cards]);

  const displayCards = () => {
    const cardList = cards.map((card) => (
      <li
        key={card.key}
        onClick={() => {
          incrScore(card);
        }}
        disabled={won || lost}
      >
        <Card image={card.image} title={card.title} />
      </li>
    ));
    return <ul>{cardList}</ul>;
  };

  const alert = () => {
    if (won === true) {
      return (
        <div className="success">
          <div>
            <strong>You Won!</strong> Congratulations
          </div>
          <button onClick={reset}>New Game</button>
        </div>
      );
    } else if (lost === true) {
      return (
        <div className="failure">
          <div>
            <strong>You Lost!</strong> Try again
          </div>
          <button onClick={reset}>New Game</button>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="header">
        <h1>Witcher Memory Game</h1>
        <div>Pick a card, but do not pick it again!</div>
      </div>
      <div className="bar">
        {alert()}
        <div className="score">Score: {score}</div>
        <div className="score">Best: {bestScore}</div>
      </div>
      <div className="card-container">{displayCards()}</div>
      <div className="footer"></div>
    </>
  );
};

export default Game;
