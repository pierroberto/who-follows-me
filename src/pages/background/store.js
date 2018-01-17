import { applyMiddleware, createStore } from "redux";
import { wrapStore, alias } from "react-chrome-redux";
import reducer from "./reducers";

const store = createStore(reducer);
wrapStore(store, {
  portName: "INSTAGRAM"
});

export default store;
