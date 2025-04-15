import { createTheme } from "@mui/material/styles";

export const getMuiTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
       ? {
            background: {
              default: "#0f172b",
              paper: "#1d1d1d",
            },
            text: {
              primary: "#ffffff",
            },
          }
        : {
            background: {
              default: "#ffffff",
              paper: "#f5f5f5",
            },
            text: {
              primary: "#000000",
            },
          }),
    },
  });
