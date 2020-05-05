import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { increment, decrement } from "./store/count";

function App(props) {
  return (
    <div className="App">
      <h1>{props.count}</h1>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

export default connect(
  state => ({ count: state.count }),
  { increment, decrement }
)(App);
