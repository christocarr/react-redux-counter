import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export function increment() {
  // return {
  //   type: "INCREMENT"
  // };
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({ type: "INCREMENT" });
    }, 2000);
  };
}

export function decrement() {
  return {
    type: "DECREMENT"
  };
}

function reducer(count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
