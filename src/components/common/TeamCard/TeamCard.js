import React from "react";
import style from "./TeamCard.module.css";

export default class TeamCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  cardClicked = () => {
    const isSelected = this.state.isSelected;
    if (isSelected) {
      this.props.removeTeam(this.props.name); //If its already selected, it will call the removeTeam function.
    } else {
      this.props.addTeam(this.props.name);
    }

    this.setState({
      isSelected: !isSelected
    });

    this.props.checkDone();
  };

  render() {
    const isSelected = this.state.isSelected;
    return (
      <div
        className={style.TeamCard}
        onClick={this.cardClicked}
        style={
          isSelected
            ? {
                backgroundColor: "blue",
                transitionDuration: "0.15s",
                transform: "scale(1.05)"
              }
            : { backgroundColor: "transparent" }
        }
      >
        <img src={this.props.href} alt="CardLogo" />
        <font size="4">{this.props.name}</font>
      </div>
    );
  }
}
