import React from "react";

import "./style.scss";

import { Home } from "./Home";
import { RouteComponentProps } from "react-router-dom";

export const HomeContainer = (props: RouteComponentProps) => {
  const { history } = props;

  const goToTodo = () => {
    history.push("/todolist");
  };

  return <Home goToTodo={goToTodo} />;
};
