import React from "react";
import AboutUs from "./pages/AboutUs";
import GLobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail"
// router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GLobalStyle />
      <Nav />
      <Switch>
      <Route path="/" exact>
        <AboutUs />
      </Route>
      <Route path="/work" exact>
        <OurWork />
      </Route>
      <Route path="/work/:id">
        <MovieDetail />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
