import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderTop from "./Components/HeaderTop/HeaderTop";
import HeaderBottom from "./Components/HeaderBottom/HeaderBottom";
import FooterTop from "./Components/FooterTop/FooterTop";
import Footer from "./Components/Footer/Footer";
import FoodContainer from "./Components/FoodContainer/FoodContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemFood from "./Components/ItemFood/ItemFood";

function App() {
  return (
    <>
      <Router>
        <HeaderTop></HeaderTop>
        <HeaderBottom></HeaderBottom>
        <Switch>
          <Route exact path="/">
            <FoodContainer></FoodContainer>
          </Route>
          <Route path="/itemFood/:id">
            <ItemFood></ItemFood>
          </Route>
        </Switch>
        <FooterTop></FooterTop>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
