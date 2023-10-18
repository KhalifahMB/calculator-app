import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppContextProvider } from "./context/appcontext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </React.StrictMode>
);
