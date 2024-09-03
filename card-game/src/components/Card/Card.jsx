import React, { useState } from "react";
import "./Card.css";
import { cardData } from "../../data/CardData";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [cardClicked, setCardClicked] = useState(null);
  const [btnClicked, setBtnClicked] = useState(null);
  const [showColor, setShowColor] = useState([]);
  const cardCount = cardData.length / 2;
  const navigate = useNavigate();

  const CardClicked = (item) => {
    if (!cardClicked) {
      setCardClicked(item);
    } else if (!btnClicked) {
      setBtnClicked(item);
      if (cardClicked === item) {
        setTimeout(() => {
          alert("Card matched");
          setShowColor((prev) => [...prev, cardClicked]);
          setCardClicked(null);
          setBtnClicked(null);
        }, 500);
      } else {
        setTimeout(() => {
          alert("Card Is Not Matched");
          setCardClicked(null);
          setBtnClicked(null);
        }, 500);
      }
    }
  };

  return (
    <>
      {showColor.length === cardCount
        ? alert("Congratuletions You Finish The Game")
        : null}
      <div>
        <div className="card-container">
          {cardData.map((ele) => (
            <button
              key={ele.id}
              disabled={showColor.includes(ele.item)}
              className={`card ${
                showColor.includes(ele.item) ? "matched" : ""
              }`}
              onClick={() => CardClicked(ele.item)}
            >
              <div className="card-content">
                <h1 style={{ textAlign: "center" }}>Card</h1>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
