import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux'

import { click } from './click/reducer'
import { distanceClickEpic } from './click/observables'

export const rootEpic = combineEpics(distanceClickEpic);

export const reducer = combineReducers({
  click,
});