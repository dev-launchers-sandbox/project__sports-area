import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Header from "./components/common/Header";
import PageBody from "./components/common/PageBody";

function App() {
  return (
    <div className="App">
      <Header />
      <PageBody>
        <br />
        <hr />
        <div className="Welcome">
          <h3>Get Notified everytime your team scores! </h3>
        </div>
        <hr />
        <div className="Continue">
          <button onClick="getStarted()">Get Started!</button>
        </div>
      </PageBody>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
