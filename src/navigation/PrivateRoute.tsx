import React, { FunctionComponent } from "react";

import { Route, Redirect } from "react-router-dom";

type PrivateRouteProps = {
  path: string;
  component: FunctionComponent<any>;
  exact?: boolean;
  // [prop: string]: any;
};

export const PrivateRoute = (props: PrivateRouteProps) => {
  const Component = props.component;
  return (
    <Route
      exact={props.exact}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Component props={props} />
        ) : (
          <Redirect to="/authorization" />
        )
      }
    />
  );
};
