/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import Leaderboard_row from "./Leaderboard_row";
import Leaderboard_toppers from "./Leaderboard_toppers";
import "../componentsStyles/leaderboard.css";

function Leaderboard() {
  const [scores, set_scores] = useState([
    {
      name: "Harsh Saboo",
      score: 54574,
    },
    {
      name: "Sidarth Jain",
      score: 5432,
    },
    {
      name: "Aniket Kanodia",
      score: 542,
    },
    {
      name: "Mayank Enghe",
      score: 54,
    },
    {
      name: "Shubham Shukla",
      score: 5,
    },
    {
      name: "Chirag Raghuwanshi",
      score: 4,
    },
  ]);

  return (
    <div className="leaderboardbody">
      <div className="d-flex justify-content-around toppers_background">
        {scores.length > 1 && (
          <Leaderboard_toppers rank={2} name={scores[1].name} />
        )}
        {scores.length > 0 && (
          <Leaderboard_toppers rank={1} name={scores[0].name} />
        )}
        {scores.length > 2 && (
          <Leaderboard_toppers rank={3} name={scores[2].name} />
        )}
      </div>
      <div className="leaderboard_css">
        {scores.map((ele, index) => (
          <Leaderboard_row name={ele.name} score={ele.score} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
