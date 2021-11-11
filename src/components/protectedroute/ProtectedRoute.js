import React, { Component } from "react";
import { Redirect, Route } from "react-router";
import Auth from "../Authentication/Authentication";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (Auth.isAuthenticated()) {
                    return <Component {...props} />;
                }
                else {
                    return (<Redirect to={{

                        pathname: "/signin",
                        state: {
                            from: props.location
                        }
                    }} />);
                }
            }}
        />
    );
};