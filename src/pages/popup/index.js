import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "react-chrome-redux";
import reducers from "../background/reducers";
import App from "./App";
import "./index.css";

const store = new Store({
  portName: "INSTAGRAM"
});
console.log("outside", store.ready);
store.ready().then(() => {
  console.log("index ready");
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    mountNode
  );
});
