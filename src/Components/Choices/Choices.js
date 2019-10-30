import React from "react";
import "./Choices.css";
import Choice from "../Choice/Choice";

const choices = ["rock", "paper", "scissors"];
class Choices extends React.Component {
  handleSelection = type => {
    this.props.onPlayerDecision(type);
  };

  render() {
    return (
      <div className="choices">
        {choices.map((choice, index) => (
          <Choice
            key={index}
            lastPlayerChoice={this.props.lastPlayerChoice}
            lastRivalChoice={this.props.lastRivalChoice}
            type={choice}
            handleClick={this.handleSelection}
          />
        ))}
      </div>
    );
  }
}

export default Choices;
