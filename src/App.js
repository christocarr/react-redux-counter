import React from "react";
import "./styles.css";
// import { connect, useSelector } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/index.js";

function App(props) {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

// export default connect(
//   state => ({ count: state.count }),
//   { increment, decrement }
// )(App);
export default App;
