import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Locations from "./containers/Locations";
import Services from "./containers/Services";
import Employees from "./containers/Employees";
import Newsletter from "./containers/Newsletter";
import News from "./containers/News";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
        <main>
            <Locations/>
            <Services />
            <Employees />
            <Newsletter />
            <News />
        </main>
        <Footer />
    </div>
  );
}

export default App;
