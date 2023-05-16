import React from "react";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
