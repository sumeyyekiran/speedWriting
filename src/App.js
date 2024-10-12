import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Challengers from "./components/challenges/Challengers";
import Results from "./components/results/Results";
import SpeedCheck from "./components/speedcheck/SpeedCheck";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isDarkTheme, dark, light } = context;
        const theme = isDarkTheme ? dark : light;
        return (
          <div className={`app-layout ${theme.app}`}>
            <div className="container pt-1">
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path="/results" element={<Results />} />
                  <Route path="/challenges" element={<Challengers />} />
                  <Route path="/" element={<SpeedCheck />} />
                  {/* 404 sayfası için yönlendirme */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default App;
