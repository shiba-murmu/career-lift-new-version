import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { GetMuiTheme } from "./components/MUItheme/GetMuiTheme.js";
import { TailwindThemeMode } from "./components/hooks/TailwindThemeMode.js";

/**
 * 
 * @returns Here using code for dark themes for whole website
 * its a global theme
 */

const Root = () => {
  const mode = TailwindThemeMode();
  const theme = GetMuiTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
