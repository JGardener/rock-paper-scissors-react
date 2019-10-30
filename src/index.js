import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RockPaperScissors from "./Components/RockPaperScissors/RockPaperScissors";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Rock, Paper, Scissors!</h1>
        <RockPaperScissors />
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
