require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { App } from "./App";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
);
