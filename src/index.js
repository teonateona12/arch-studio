import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container
);
