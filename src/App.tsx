import React from 'react';
import './App.css';
import Header from "./components/Header";
import Locations from "./containers/Locations";
import Services from "./containers/Services";


function App() {
  return (
    <div className="App">
      <Header/>
        <main>
            <Locations/>
            <Services />
        </main>
    </div>
  );
}

export default App;
