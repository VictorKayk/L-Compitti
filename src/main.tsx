import { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./config/i18n";
import { GlobalStyle } from "./styles/global";

render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
  document.getElementById("root")
);
