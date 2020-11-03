/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { LogInSuccessAction } from "./store/auth-store/actions";
import * as _ from 'lodash';
import { AuthToken } from "./models/AuthToken.model";

function App(props: any) {

    const dispatch = useDispatch();
    const logInSuccess = (props: AuthToken) => dispatch(LogInSuccessAction(props));
    
    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user') as string);
        if (!_.isEmpty(user)) {
            logInSuccess(user);
        }
    }, [])
    return (
        <div className="App">
            {props.children}
        </div>
    );
}

export default App;

