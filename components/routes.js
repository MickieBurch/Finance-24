import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import LandingPage from "./Landing_page";
import Home from "./Home";
import Nav from "./nav"
import Footer from "./Footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Login" component={Login} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
