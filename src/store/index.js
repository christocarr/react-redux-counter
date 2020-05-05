import { combineReducers, createStore } from "redux";
import countReducer from "./count.js";

const rootReducer = combineReducers({
  count: countReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
