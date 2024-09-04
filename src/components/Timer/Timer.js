import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [timer, setTimer] = useState(90);
  const navigate = useNavigate();

  useEffect(() => {
    //After Complete Time Navigate To Landing screen
    if (timer <= 0) {
      alert("Time Up");
      navigate('/')
      return;
    }
    //Timer Counting
    const countTime = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(countTime);
  }, [timer]);

  //Format This Time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "4px",
        width: 300,
        marginTop: "2%",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Timer: {formatTime(timer)}</h3>
    </div>
  );
};

export default Timer;
