import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app.component';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GuardedRoute from "./shared/guarded-route.component";
import MainPage from "./wet-page/main-page.component";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers, { rootEpic } from './store/index';
import { createEpicMiddleware } from "redux-observable";
import { LinearProgress } from "@material-ui/core";

const Manager = React.lazy(() => import("./wet-manager/containers/manager.component"));
const Login = React.lazy(() => import("./wet-manager/login-page.component"));
const epicMiddleware = createEpicMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
    const store = createStore(
        reducers,
        {},
        composeEnhancers(applyMiddleware(epicMiddleware)),
    )

    epicMiddleware.run(rootEpic as any);

    return store;
}



ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter basename="/staging/build/">
            <App>
                <Suspense fallback={<LinearProgress/>}>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <GuardedRoute path="/manager" component={Manager} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Suspense>
            </App>
        </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
);

