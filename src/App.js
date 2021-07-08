import React from "react";
import AboutUs from './pages/AboutUs'
import GLobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
    <GLobalStyle />
    <Nav />
     <AboutUs />
    </div>
  );
}

export default App;
