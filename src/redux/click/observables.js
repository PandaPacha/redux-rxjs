import { ofType } from "redux-observable";
import { debounceTime, map, pairwise, scan } from "rxjs/operators"; // rxjs v5.5+

import { CLICK_XY, CLICK_TOTAL } from "./actions";

const calculateDistance = pairOfClicks => {
  const x0 = pairOfClicks[0].payload.x;
  const y0 = pairOfClicks[0].payload.y;
  const x1 = pairOfClicks[1].payload.x;
  const y1 = pairOfClicks[1].payload.y;
  const distance = Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
  return distance;
};

export const distanceClickEpic = action$ =>
  action$.pipe(
    ofType(CLICK_XY),
    debounceTime(400),
    pairwise(),
    scan(
      (acc, lastPairOfClicks) => acc + calculateDistance(lastPairOfClicks),
      0
    ),
    map(distance => ({
      type: CLICK_TOTAL,
      payload: { distance }
    }))
  );
