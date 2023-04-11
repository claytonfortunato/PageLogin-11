import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
