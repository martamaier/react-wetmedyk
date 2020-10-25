import React from 'react';
import MainPage from './wet-page/MainPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from "./wet-manager/LoginPage";
import Manager from "./wet-manager/containers/manager";
import GuardedRoute from "./shared/GuardedRoute";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <GuardedRoute path="/manager" component={Manager} />
                  <Route path="/login" component={LoginPage} />
                  <Route exact path="/" component={MainPage} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;

