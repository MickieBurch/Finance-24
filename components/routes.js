import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./SignUp";
import LandingPage from "./Landing_page";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}
