import React, { Component } from "react";
import { connect } from "react-redux";
import { pairwise } from "rxjs/operators";
import Rx from "rxjs";

import { handleClick } from "../../redux/click/actions";
import { distanceSelector } from "../../redux/click/selectors";

export class MouseClickComponent extends Component {
  componentWillMount() {
    const clicks = Rx.Observable.fromEvent(document, "click")
      .debounceTime(400)
      .pairwise()
      .scan(
        (acc, lastPairOfClicks) =>
          acc + this.calculateDistance(lastPairOfClicks),
        0
      )
      .subscribe(distance => this.props.handleClick(distance));
  }

  calculateDistance = pairOfClicks => {
    const x0 = pairOfClicks[0].clientX;
    const y0 = pairOfClicks[0].clientY;
    const x1 = pairOfClicks[1].clientX;
    const y1 = pairOfClicks[1].clientY;
    const distance = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
    return distance;
  };

  render() {
    return <div>Total distance: {this.props.dist}</div>;
  }
}

const mapStateToProps = state => {
  return {
    dist: distanceSelector(state)
  };
};

export const MouseClick = connect(mapStateToProps, { handleClick })(
  MouseClickComponent
);
