import React, { Component } from "react";
import { connect } from "react-redux";

import { handleClick, handleClickXY } from "../../redux/click/actions";
import { distanceSelector } from "../../redux/click/selectors";

export class MouseClickComponent extends Component {
  componentWillMount() {
    document.addEventListener("click", e => this.props.handleClickXY(e.clientX, e.clientY))
}

  render() {
    return <div>Total distance: {this.props.dist}</div>;
  }
}

const mapStateToProps = state => {
  return {
    dist: distanceSelector(state)
  };
};

export const MouseClick = connect(mapStateToProps, { handleClick, handleClickXY })(
  MouseClickComponent
);
