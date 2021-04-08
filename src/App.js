import React from "react";
import AboutUS from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div style={{ overflow: "hidden" }} className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUS />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetails />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
        <ScrollTop />
      </AnimatePresence>
    </div>
  );
}

export default App;
