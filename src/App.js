import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Day12/pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
