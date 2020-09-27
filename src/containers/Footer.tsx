import React from "react";
import logo from "./../images/logo.png";

class Footer extends React.Component<any, any> {
    render() {
        return <footer>
            <div className="container footer">
                <div className="footer-wrapper">
                    <div className="row">
                        <div className="col-md-6 footer-wrapper-icons">
                            <i className="fab fa-facebook-square" />
                            <i className="fab fa-twitter-square" />
                            <i className="fas fa-envelope-square" />
                        </div>
                        <div className="col-md-6 footer-wrapper-locations">
                            <img src={logo} alt="" />
                                <div className="location">
                                    <h3>Przychodnia Banino</h3>
                                    <span>ul. Różana 16, 80 - 297 Banino</span>
                                    <span>+48 664 430 387</span>
                                </div>
                                <div className="location">
                                    <h3>Gabinet Pępowo</h3>
                                    <span>ul. Armii Krajowej 2, 80 - 330 Pępowo</span>
                                    <span>+48 664 430 388</span>
                                </div>
                        </div>
                    </div>
                </div>
                <span className="copyrights">@ 2020 Wetmedyk. All rights reserved.</span>
            </div>
        </footer>;
    }
}

export default Footer;
