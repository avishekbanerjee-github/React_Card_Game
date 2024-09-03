import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
import { Alert } from "bootstrap";
import Timer from "../Timer/Timer";

const Home = () => {
  return (
    <div className="home-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Timer />
      </div>
      <Card />
    </div>
  );
};

export default Home;
