import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/users/:id">
      <Details />
    </Route>
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
