import { createStore, combineReducers, applyMiddleware } from "redux";
import { click } from './click/reducer'

const reducer = combineReducers({
  click,
});

const devToolMiddleWare =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  reducer,
  devToolMiddleWare,
  applyMiddleware()
);
