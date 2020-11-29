import React from "react";
import classes from './Services.module.scss';
import '../../scss/_utilities.scss';
import {Container} from "react-bootstrap";
import LocationsDropdown from "../../shared/widgets/Dropdown";
import {useSelector} from "react-redux";
import {getSelectedLocation} from "../../store/locations-store/selectors";
import Contact from "../components/Contact";

function Services() {
    const selectedLocation = useSelector(getSelectedLocation);

        return (
            <section id="contact" className={[classes.services, 'sectionPadding'].join(' ')}>
                <h2>Kontakt</h2>
                <Container className={classes.servicesWrapper}>
                    <LocationsDropdown />
                </Container>
                    {
                        selectedLocation ?
                            <Contact {...selectedLocation} /> :
                            <h3>Nie wybrano żadnej lecznicy</h3>
                    }
            </section>);
}

export default Services;
