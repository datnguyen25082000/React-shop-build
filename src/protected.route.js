import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/", // đường dẫn khi vào privateRoute mà chưa đăng nhập
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
