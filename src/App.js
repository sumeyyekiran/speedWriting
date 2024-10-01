import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Challengers from "./components/challengers/Challengers";
import Results from "./components/results/Results";
import SpeedCheck from "./components/speedcheck/SpeedCheck";

function App() {
  return (
    <div className="container pt-1">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/results" element={<Results />} />
          <Route path="/challengers" element={<Challengers />} />
          <Route path="/" element={<SpeedCheck />} />
          {/* 404 sayfası için yönlendirme */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
