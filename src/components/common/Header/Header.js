import React from "react";

import style from "./Header.module.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className={style.header}>SportsArea</div>
      </div>
    );
  }
}
