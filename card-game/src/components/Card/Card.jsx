import React, { useState } from "react";
import "./Card.css";
import { cardData } from "../../data/CardData";

const Card = () => {
  const [cardClicked, setCardClicked] = useState(null);
  const [btnClicked, setBtnClicked] = useState(null);
  const [showColor, setShowColor] = useState([]);

  const CardClicked = (item) => {
    console.log("Current State:", { cardClicked, btnClicked, showColor });
    if (!cardClicked) {
      setCardClicked(item);
    } else if (!btnClicked) {
      setBtnClicked(item);
      if (cardClicked === item) {
        setTimeout(() => {
          alert("Card match");
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
      <div>
        <div className="card-container">
          {cardData.map((ele) => (
            <button
              key={ele.id}
              className={`card ${
                showColor.includes(ele.item) ? "matched" : ""
              }`}
              onClick={() => CardClicked(ele.item)}
            >
              <div className="card-content">
                <h1>{ele.item}</h1>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
