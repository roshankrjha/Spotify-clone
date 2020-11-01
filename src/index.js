import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { DataLayer } from "./Datalayer";
import reducer, { initialState } from "./reducer";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  rootElement
);
