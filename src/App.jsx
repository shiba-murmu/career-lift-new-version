import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation, this also has to import here commented because it is already imported
} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
import SignUp from "./pages/SignUp/SignUp";
import Matriculation from "./pages/Explorecareer/Matriculation/Matriculation";
import Graduation from "./pages/Explorecareer/Graduation/Graduation";
import Intermediate from "./pages/Explorecareer/Intermediate/Intermediate";
import ArticleAndAdvice from "./pages/ArticleAndDevice/ArticleAndAdvice";
// import Login from './pages/Login/LoginPage';
import LoginPage from "./pages/Login/LoginPage";

// ****************************************************

const Layout = ({ children }) => {
  const location = useLocation();
  const hideheaderFooter = location.pathname === "/"; // check it it's the landing page

  return (
    <>
      {!hideheaderFooter && <Header />}
      {/* show header on all pages except landing page */}
        <main>{children}</main>
      {!hideheaderFooter && <Footer />}
      {/* show footer on all pages except landing page */}
    </>
  );
};

// *******************************************************
/**
 *
 * @returns Scroll on top page
 */
function ScrollToTop() {
  /**
   * This is the function for to scroll on top after redirecting the page..
   * automatically...
   */
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner
  }, [pathname]);

  return null;
}
//************************************************** */

function App() {
  return (
    <>
      {/* Here all the routes for the page available here... */}
      <Router>
        <Layout>
          <ScrollToTop />
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/article & advice" element={<ArticleAndAdvice />} />
            <Route path="/login" element={<LoginPage />} />
            {/* This id helps to distinguish the files to their destinations. */}
            <Route path="/matriculation/:id" element={<Matriculation />} />
            <Route path="/graduation/:id" element={<Graduation />} />
            <Route path="/intermediate/:id" element={<Intermediate />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
