import React from 'react';
import { Route, Redirect } from "react-router-dom";
import * as _ from "lodash";

// @ts-ignore
const GuardedRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => (
        isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />

    function isAuthenticated(): boolean {
        // noinspection PointlessBooleanExpressionJS
        return !!_.get(JSON.parse(sessionStorage.getItem('user') as string), 'token', false);
    }
}

export default GuardedRoute;
