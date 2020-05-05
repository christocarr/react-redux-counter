import React from "react";
import "./styles.css";
import store from "./store/index";
import { increment, decrement } from "./store/count";

export default function App() {
  store.dispatch(increment());
  store.dispatch(decrement());
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
