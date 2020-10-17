import React from "react";
import Locations from "./containers/Locations";
import Services from "./containers/Services";
import Employees from "./containers/Employees";
import Newsletter from "./containers/Newsletter";
import News from "./containers/News";
import Footer from "./containers/Footer";
import Header from "./components/Header";

const mainPage = () => (
    <>
        <Header/>
        <main>
            <Locations/>
            <Services />
            <Employees />
            <Newsletter />
            <News />
        </main>
        <Footer />
    </>
);

export default mainPage;
