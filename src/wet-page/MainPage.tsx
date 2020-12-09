import React from "react";
import Locations from "./containers/Locations";
import Services from "./containers/Services";
import Employees from "./containers/Employees";
import Social from "./containers/Social";
import News from "./containers/News";
import Footer from "./containers/Footer";
import Header from "./components/Header";
import PrimaryServices from "./containers/PrimaryServices";

function MainPage() {
    return (
        <>
            <Header />
            <main>
                <Locations/>
                <PrimaryServices />
                <Services />
                <Employees />
                <Social />
                <News />
            </main>
            <Footer />
        </>
    );
}

export default MainPage;
