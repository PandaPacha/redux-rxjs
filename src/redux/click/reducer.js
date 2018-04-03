import {MOUSE_CLICK} from './actions'

const initialState = {
    x: null,
    y: null,
    distance: 0,
}

export const click = (state = initialState, action) => {
    switch (action.type) {
    case MOUSE_CLICK:
      return {
        ...state,
        distance: action.payload.distance, //state.distance + action.payload.distance,
      }
    default:
      return state
    }
}