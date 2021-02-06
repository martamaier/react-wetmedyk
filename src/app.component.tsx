/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LogInSuccessAction } from "./store/auth-store/actions";
import * as _ from 'lodash';
import { RootState } from "./store";
import AppModal from './shared/modal.component';

function App(props: any) {

    const dispatch = useDispatch();
    const shouldDisplayModal = useSelector((state: RootState) => state.modal.shouldDisplay);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('user') as string);
        if (!_.isEmpty(user)) {
            dispatch(LogInSuccessAction(user));
        }
    }, [])
    return (
        <div className="App">
            {props.children}
            {
                shouldDisplayModal && <AppModal />
            }
        </div>
    );
}

export default App;

