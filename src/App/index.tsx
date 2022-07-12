import React from "react";
import { Route, Routes } from "react-router-dom";
import Play from "./Play";
import Welcome from "./Welcome";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  );
};

export default App;
