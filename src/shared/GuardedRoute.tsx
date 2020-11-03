import React from 'react';
import { Route, Redirect } from "react-router-dom";
import * as _ from "lodash";
import { useSelector } from "react-redux";
import { AuthState } from "../store/auth-store";

// @ts-ignore
const GuardedRoute = ({ component: Component, ...rest }) => {
    const authState = useSelector((state: { auth: AuthState }) => state.auth);
    const isAuthenticated = (): boolean  => !_.isEmpty(authState.user);
    return <Route {...rest} render={(props) => (
        isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
}

export default GuardedRoute;
