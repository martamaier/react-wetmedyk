import {Location} from "../models/Location.model";
import {Carousel} from "react-bootstrap";
import React from "react";

const location = (props: Location) => (
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://cdn.orvis.com/images/DBS_Maltese_1280.jpg"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <div className="site">
            <div className="site-heading">
                <h2>Przychodnia Banino</h2>
            </div>
            <div className="container site-body">
                <div className="row">
                    <div className="col-md-6 site-body-data">
                        <h3>Adres</h3>
                        <p>ul.Różana 16<br/>80 – 297 Banino</p>
                        <h3>Godziny otwarcia</h3>
                        <p>pon. – pt. 9:00 – 19:00<br/>sob. 9:00 – 12:00</p>
                        <h3>Kontakt</h3>
                        <p>+48 664 430 387</p>
                    </div>
                    <div className="col-md-6 site-body-map">
                        {/*<iframe*/}
                        {/*    title="map"*/}
                        {/*    src="https://www.google.com/maps/embed/v1/place?q=R%C3%B3%C5%BCana%2016%2C%20Banino%2C%20Poland&amp;key=AIzaSyBz-w0JyWCwEzknkta4vhD6AEej2MXkvPI"*/}
                        {/*    allowFullScreen={true}/>*/}
                    </div>
                </div>
            </div>
        </div>
    </Carousel.Item>
);

export default location;
