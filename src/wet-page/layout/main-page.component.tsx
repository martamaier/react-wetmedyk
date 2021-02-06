import React from "react";
import Locations from "../containers/locations.component";
import Services from "../containers/services.component";
import Employees from "../containers/employees.component";
import Social from "./social.component";
import News from "../containers/news.component";
import Footer from "./footer.component";
import Header from "./header.component";
import PrimaryServices from "../containers/primary-services.component";
import Divider from "../../shared/divider.component";

function MainPage() {
    return (
        <>
            <Header />
            <main>
                <Locations/>
                <Divider />
                <PrimaryServices />
                <Divider />
                <Services />
                <Divider />
                <Employees />
                <Divider />
                <Social />
                <Divider />
                <News />
            </main>
            <Footer />
        </>
    );
}

export default MainPage;
