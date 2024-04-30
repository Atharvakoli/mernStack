import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthState from "./context/AuthSystem.jsx";
import FeatureState from "./context/FeaturesSystem.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthState>
      <FeatureState>
        <App />
      </FeatureState>
    </AuthState>
  </React.StrictMode>
);
