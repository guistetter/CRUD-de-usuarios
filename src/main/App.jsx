import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import React from "react";

//import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
//import Home from "../components/template/home/Home";

export default props => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);
//routes entrou no lugar de home
