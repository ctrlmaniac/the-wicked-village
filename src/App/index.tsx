import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

export default App;