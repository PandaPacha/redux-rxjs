import { CLICK_TOTAL, CLICK_XY } from "./actions";

const initialState = {
  x: null,
  y: null,
  distance: 0
};

export const click = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_TOTAL:
      return {
        ...state,
        distance: action.payload.distance,
      };
    case CLICK_XY:
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y,
      };
    default:
      return state;
  }
};
