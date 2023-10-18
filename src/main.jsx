import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./config/mui.theme";
import { GlobalStayle } from "./config/global-style";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import "./fonts/stylesheet.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStayle />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
