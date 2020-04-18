import React from "react";

import style from "./Footer.module.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className={style.Footer}>Made By: Guillermo Santaolalla, 2020</div>
      </div>
    );
  }
}
