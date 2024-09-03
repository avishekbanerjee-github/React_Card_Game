import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer <= 0) {
      alert("Time's Up");
      return;
    }
    const countTime = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(countTime);
  }, [timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return <h1>Timer: {formatTime(timer)}</h1>;
};

export default Timer;
