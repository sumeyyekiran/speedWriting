import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./contexts/ThemeContext";
import ChallengeContextProvider from "./contexts/ChallengeContext";

const AppConnector = () => {
  return (
    <ThemeContextProvider>
      <ChallengeContextProvider>
        <App />
      </ChallengeContextProvider>
    </ThemeContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppConnector />
  </React.StrictMode>
);
reportWebVitals();
