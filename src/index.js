import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Scoreboard from "./Components/Scoreboard/Scoreboard";
import Result from "./Components/Result/Result";
import Choices from "./Components/Choices/Choices";

class App extends React.Component {
  render() {
    return (
      <div className="body-container">
        <div className="width">
          <section className="scoreboard">
            <Scoreboard />
          </section>
          <section className="result-section">
            <Result />
          </section>
          <section className="choices">
            <Choices />
          </section>
          <section className="footer">
            <p>Made live on Twitch with the RomculusTV community.</p>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
