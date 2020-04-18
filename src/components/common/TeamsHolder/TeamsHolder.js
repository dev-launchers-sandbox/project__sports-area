import React from "react";
import data from "/../../../public/Data/TeamsList.json";
import style from "./TeamsHolder.module.css";
import TeamCard from "../TeamCard/TeamCard";
import fakeUsers from "/../../../public/Data/FakeUsers.json";
export default class TeamsHolder extends React.Component {
  constructor(props) {
    super(props);
    this.checkDone = this.checkDone.bind(this);
    this.state = {
      teamsFollowing: []
    };
  }
  addTeam = teamName => {
    let teamsFollowingArray = this.state.teamsFollowing;
    teamsFollowingArray.push(teamName); // Push new teamName onto our array

    this.setState({
      teamsFollowing: teamsFollowingArray
    });
  };

  // This function removes a team from our list
  removeTeam = teamName => {
    let teamsFollowingArray = this.state.teamsFollowing;
    var index = teamsFollowingArray.indexOf(teamName);
    teamsFollowingArray.splice(index, 1);

    this.setState({
      teamsFollowing: teamsFollowingArray // Set new state
    });
  };
  checkDone() {
    let teamsFollowingArray = this.state.teamsFollowing;
    if (teamsFollowingArray.length === 0) {
      this.props.setDone(false);
    } else {
      this.props.setDone(true);
    }
  }

  render() {
    return (
      <div>
        <div className={style.TeamsHolder}>
          {data.map(item => (
            <TeamCard
              key={item.id}
              name={item.name}
              href={item.href}
              removeTeam={this.removeTeam}
              addTeam={this.addTeam}
              checkDone={this.checkDone}
            />
          ))}
        </div>
      </div>
    );
  }
}
