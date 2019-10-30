import React from "react";
import Scoreboard from "../Scoreboard/Scoreboard";
import Choices from "../Choices/Choices";
import "./RockPaperScissors.css";

const choices = ["rock", "paper", "scissors"];
const map = {};

choices.forEach((choice, i) => {
  map[choice] = {};
  map[choice][choice] = 0;
  map[choice][choices[(i + 1) % 3]] = -1;
  map[choice][choices[(i + 2) % 3]] = 1;
});

class RockPaperScissors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastOutcome: "",
      lastPlayerChoice: "",
      lastRivalChoice: "",
      playerScore: 0,
      rivalScore: 0,
      gamesPlayed: 0
    };
  }

  onPlayerDecision = playersChoice => {
    const rivalChoice = this.generateRivalChoice();
    const winner = this.decideWinner(playersChoice, rivalChoice);

    const newState = {
      lastPlayerChoice: playersChoice,
      lastRivalChoice: rivalChoice
    };

    if (winner === 1) {
      newState.lastOutcome = "Player Wins";
      newState.playerScore = this.state.playerScore + 1;
    }

    if (winner === 0) {
      newState.lastOutcome = "Tie";
    }

    if (winner === -1) {
      newState.lastOutcome = "Rival Wins";
      newState.rivalScore = this.state.rivalScore + 1;
    }

    this.setState(newState);
    newState.gamesPlayed = this.state.gamesPlayed + 1;
  };

  generateRivalChoice = () => {
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
  };

  decideWinner(playerChoice, rivalChoice) {
    return map[playerChoice][rivalChoice];
  }

  render() {
    return (
      <div className="rock-paper-scissors">
        <Scoreboard
          playerScore={this.state.playerScore}
          rivalScore={this.state.rivalScore}
          gamesPlayed={this.state.gamesPlayed}
        />
        <h2>Please make a choice.</h2>
        {this.state.lastOutcome && (
          <div className="last-outcome">{this.state.lastOutcome}</div>
        )}
        <Choices
          lastPlayerChoice={this.state.lastPlayerChoice}
          lastRivalChoice={this.state.lastRivalChoice}
          onPlayerDecision={this.onPlayerDecision}
        />
      </div>
    );
  }
}

export default RockPaperScissors;
