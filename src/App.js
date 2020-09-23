import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderTop from "./Components/HeaderTop/HeaderTop";
import HeaderBottom from "./Components/HeaderBottom/HeaderBottom";
import FooterTop from "./Components/FooterTop/FooterTop";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <HeaderTop></HeaderTop>
      <HeaderBottom></HeaderBottom>
      <FooterTop></FooterTop>
      <Footer></Footer>
    </>
  );
}

export default App;
