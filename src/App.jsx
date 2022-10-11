import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Routes/Welcome/Welcome";
import Home from "./Routes/Home/Home";
import Recipe from "./Routes/Recipe/Recipe";
import Create from "./Routes/Create/Create";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
