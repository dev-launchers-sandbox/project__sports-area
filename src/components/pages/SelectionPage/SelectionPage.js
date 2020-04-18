import React from "react";

import style from "./SelectionPage.module.css";
import TeamsHolder from "../../common/TeamsHolder/TeamsHolder.js";
import PageBody from "../../common/PageBody/PageBody.js";
export default class SelectionPage extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false
    };
    this.setDone = this.setDone.bind(this);
  }
  setDone(boolean) {
    this.setState({
      done: boolean
    });
  }

  render() {
    return (
      <div>
        <PageBody>
          <div className={style.SelectTeams}>
            <h3>Select the Teams you want to follow! </h3>
          </div>
          <TeamsHolder setDone={this.setDone} done={this.state.done} />
          {this.state.done ? (
            <button onClick={this.props.nextPage} className={style.doneButton}>
              {" "}
              Done!{" "}
            </button>
          ) : null}
        </PageBody>
      </div>
    );
  }
}
