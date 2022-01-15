import { StrictMode } from "react";
import { render } from "react-dom";
import "./config/localforage";
import "./config/i18n";

import { App } from "./App";
import { GlobalStyle } from "./styles/global";

render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
  document.getElementById("root")
);
