import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthState } from "../store/auth-store";
import * as _ from 'lodash';

// @ts-ignore
const GuardedRoute = ({ component: Component, ...rest }) => {
    const authState = useSelector((state: { auth: AuthState }) => state.auth);

    const getTokenFromSession = (): boolean => {
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        return !_.isEmpty(user);
    }

    const isAuthenticated = (): boolean  => getTokenFromSession() || !_.isEmpty(authState?.user);
    return <Route {...rest} render={(props) => (
        isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
}

export default GuardedRoute;
