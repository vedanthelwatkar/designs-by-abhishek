import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./components/Destination";
import Preview from "./components/Preview";

const App = () => {
  return (
    <div className="w-full flex items-center justify-center bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/preview" element={<Preview />} errorElement={"error"} />
          <Route path="/" element={<Destination />} errorElement={"error"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
