import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useLocation,
} from "react-router-dom";

// *****************************************************************
/**
 * Here using code for dark themes for whole website
 * its a global theme
 * 
 * 
 * 
 *    {{{{Below code is full code for dark theme}}}}
 * 
 * import { ThemeProvider, createTheme } from '@mui/material/styles';
 * import CssBaseline from '@mui/material/CssBaseline';
 * 
 * const darkTheme = createTheme({
 *   palette: {
 *     mode: 'dark',
 *   },
 * });
 * 
 * export default function App() {
 *   return (
 *     <ThemeProvider theme={darkTheme}>
 *       <CssBaseline />
 *       <main>This app is using the dark mode</main>
 *     </ThemeProvider>
 *   );
 * }
 * 
 * 
 */

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
// ****************************************************************

/**
 *
 * @returns In this app function we create routes for the
 * different pages.
 */
// *****************************************************
/**
 * Importing pages here...
 */
import Landingpage from "./pages/Landingpage";
import Home from "./pages/Homepage/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Ai from "./pages/Aiassistant/Ai";
import SkillTest from "./pages/skilltest/SkillTest";
import ExploreCareer from "./pages/Explorecareer/ExploreCareer";
import Profile from "./pages/Profile/Profile";
import Setting from "./pages/Settings/Setting";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";

// ****************************************************

const Layout = ({ children }) => {
  const location = useLocation();
  const hideheaderFooter = location.pathname === "/"; // check it it's the landing page

  return (
    <>
      {!hideheaderFooter && <Header />}
      {/* show header on all pages except landing page */}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>{children}</main>
      </ThemeProvider>
      {!hideheaderFooter && <Footer />}
      {/* show footer on all pages except landing page */}
    </>
  );
};

function App() {
  return (
    <>
      {/* Here all the routes for the page available here... */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai assistant" element={<Ai />} />
            <Route path="/skill test" element={<SkillTest />} />
            <Route path="/explore career" element={<ExploreCareer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/account" element={<Account />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
