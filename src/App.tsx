/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { AuthState } from "./store/auth-store";
import { LogInSuccessAction } from "./store/auth-store/actions";
import * as _ from 'lodash';
import { AuthToken } from "./models/AuthToken.model";

function App(props: any) {
    
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user') as string);
        if (!_.isEmpty(user)) {
            props.logInSuccess(user);
        }
    }, [])
    return (
        <div className="App">
            {props.children}
        </div>
    );
}
const mapStateToProps = (state: {auth: AuthState} ) => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        logInSuccess: (props: AuthToken) => dispatch(LogInSuccessAction(props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

