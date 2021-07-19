import React from "react";
import AboutUs from "./pages/AboutUs";
import GLobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
// router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GLobalStyle />
      <Nav />
      <Route path="/about">
        <AboutUs />
      </Route>
      <Route path="/work">
        <OurWork />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>

      <OurWork />
    </div>
  );
}

export default App;
