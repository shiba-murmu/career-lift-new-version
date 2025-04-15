import { createTheme } from "@mui/material/styles";

/**
 * 
 * This function generates a MUI theme based on the mode (light or dark) supplied to it.
 * @returns 
 */


export const GetMuiTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "dark"
       ? {
            background: {
              default: "#171717",
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
/**
 * export const getMuiTheme = (mode) =>
 *   createTheme({
 *     palette: {
 *       mode,
 *       ...(mode === "dark"
 *        ? {
 *             background: {
 *               default: "#0f172b",
 *               paper: "#1d1d1d",
 *             },
 *             text: {
 *               primary: "#ffffff",
 *             },
 *           }
 *         : {
 *             background: {
 *               default: "#ffffff",
 *               paper: "#f5f5f5",
 *             },
 *             text: {
 *               primary: "#000000",
 *             },
 *           }),
 *     },
 *   });
 * 
 * export const getMuiTheme = (mode) => {
 if (mode === 'dark') {
   return createTheme({
     palette: {
       mode: 'dark',
       background: {
         default: '#0f172b',
         paper: '#1d1d1d',
       },
       text: {
         primary: '#ffffff',
       },
     },
   });
 } else {
   return createTheme({
     palette: {
       mode: 'light',
       background: {
         default: '#ffffff',
         paper: '#f5f5f5',
       },
       text: {
         primary: '#000000',
       },
     },
   });
 }
 }
 */