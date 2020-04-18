import React from "react";
import style from "./HomePage.module.css";

import PageBody from "../../common/PageBody/PageBody.js";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <PageBody>
          <br />
          <div className="Welcome">
            <h3>Get Notified every time your team scores! </h3>
          </div>
          <hr />
          <div className="Continue">
            <img
              className={style.logo}
              src="https://upload.wikimedia.org/wikipedia/en/c/c2/SportsLogosnet_1.png"
              alt="Sports Logo"
            />
            <hr />

            <button className="getStartedButton" onClick={this.props.nextPage}>
              Get Started!
            </button>
          </div>
        </PageBody>
      </div>
    );
  }
}
