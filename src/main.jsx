import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getMuiTheme } from "./components/MUItheme/muiTheme.js";
import { UseTailwindThemeMode } from "./components/hooks/useTailwindThemeMode.js";

/**
 * 
 * @returns Here using code for dark themes for whole website
 * its a global theme
 */

const Root = () => {
  const mode = UseTailwindThemeMode();
  const theme = getMuiTheme(mode);

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
