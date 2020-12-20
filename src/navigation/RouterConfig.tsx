import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { Authorization } from "../pages/Authorization";
import { Home } from "../pages/Home/Home";
import { TodoList } from "../pages/TodoList";

import { PrivateRoute } from "./PrivateRoute";

export const RouterConfig = () => {
  return (
    <Switch>
      <PrivateRoute path="/authorization" component={Authorization} exact />
      <PrivateRoute path="/todolist" component={TodoList} exact />
      <Route path="/home" component={Home} />
      <Redirect to="/home" path="" />
    </Switch>
  );
};
