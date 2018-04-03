import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from 'redux-observable';

import { reducer, rootEpic } from './root'

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
);
