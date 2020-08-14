import React, { Component } from "react";

import "./Node.css";
export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isStart, isFinish } = this.props;
    /*const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : "";
    */
    var extraClassName = "";
    if (isFinish) {
      extraClassName = "node-finish";
    } else if (isStart) {
      extraClassName = "node-start";
    } else {
      extraClassName = "node";
    }
    return <div className={extraClassName}></div>;
  }
}
