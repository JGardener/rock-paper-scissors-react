import React from "react";
import "./Scoreboard.css";

function Scoreboard() {
  return (
    <div className="scoreboard-div">
      <div id="user-label" className="badge">
        You
      </div>
      <div id="rival-label" className="badge">
        Rival
      </div>
      <span id="user-score">0 </span>: <span id="rival-score">0</span>
      <p>
        Games played: <span id="games-played">0</span>
      </p>
    </div>
  );
}

export default Scoreboard;
