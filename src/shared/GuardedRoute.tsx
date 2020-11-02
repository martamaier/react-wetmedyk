import React from 'react';
import { Route, Redirect } from "react-router-dom";
import * as _ from "lodash";
import { connect } from "react-redux";
import { AuthState } from "../store/auth-store";

// @ts-ignore
const GuardedRoute = ({ component: Component, user, ...rest }) => {
    const isAuthenticated = (): boolean  => !_.isEmpty(user);
    return <Route {...rest} render={(props) => (
        isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
}

const mapStateToProps = (state: {auth: AuthState} ) => {
    return {
        user: state.auth.user,
    }
}

export default connect(mapStateToProps)(GuardedRoute);
