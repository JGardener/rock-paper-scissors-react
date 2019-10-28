import React from "react";
import "./Choices.css";

function Choices() {
  // Get the rival's choice.

  function getRivalChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

  // Compare the user choice with the rival choice to decide a winner.

  return (
    <div id="choices">
      <div id="rock" className="choice">
        <i className="far fa-hand-rock fa-10x" />
      </div>
      <div id="paper" className="choice">
        <i className="far fa-hand-paper fa-10x" />
      </div>
      <div id="scissors" className="choice">
        <i className="far fa-hand-scissors fa-10x" />
      </div>
    </div>
  );
}

export default Choices;
