import React from 'react';
import MainPage from './wet-page/MainPage';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from "./wet-manager/LoginPage";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Route path="/login" component={LoginPage} />
              <Route path="/home" component={MainPage} />
          </div>
      </BrowserRouter>
  );
}

export default App;
