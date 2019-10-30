import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandRock as rock,
  faHandPaper as paper,
  faHandScissors as scissors
} from "@fortawesome/free-solid-svg-icons";
import "./Choice.css";

const icons = {
  rock,
  paper,
  scissors
};

class Choice extends React.Component {
  render() {
    return (
      <div
        className={`choice 
              ${
                this.props.lastPlayerChoice === this.props.type
                  ? "playerChoice"
                  : null
              } 
              ${
                this.props.lastRivalChoice === this.props.type
                  ? "rivalChoice"
                  : null
              }                
              `}
        onClick={() => this.props.handleClick(this.props.type)}
      >
        <FontAwesomeIcon size="8x" icon={icons[this.props.type]} />
      </div>
    );
  }
}

export default Choice;
