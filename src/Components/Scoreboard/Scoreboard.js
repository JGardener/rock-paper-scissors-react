import React from "react";
import "./Scoreboard.css";

const Scoreboard = ({ playerScore, rivalScore, gamesPlayed }) => {
  return (
    <div className="scoreboard">
      <div className={`you ${playerScore > rivalScore ? "winning" : ""}`}>
        You
      </div>
      <div className="score">
        <span className="userScore">{playerScore}</span>
        <span> : </span>
        <span className="rivalScore">{rivalScore}</span>
      </div>
      <div className={`rival ${playerScore < rivalScore ? "winning" : ""}`}>
        Rival
      </div>
      <span className="games-played">Games played: {gamesPlayed}</span>
    </div>
  );
};

export default Scoreboard;
