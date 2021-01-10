import React from "react";
import classes from './Services.module.scss';
import '../../scss/_utilities.scss';
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getLocations, getSelectedLocation} from "../../store/locations-store/selectors";
import Contact from "../components/Contact";
import {LocalHospital} from "@material-ui/icons";
import { Location } from '../../models/Location.model';
import {SelectLocation} from "../../store/locations-store/actions";

function Services() {
    const dispatch = useDispatch();
    const selectedLocation = useSelector(getSelectedLocation);
    const locations = useSelector(getLocations);
    const handleSelection = (id: number) => {
        if (!selectedLocation || id !== (selectedLocation as Location).id) {
            dispatch(SelectLocation(id));
        }
    }

    return (
        <section id="contact" className={[classes.services, 'sectionPadding'].join(' ')}>
            <h2>Kontakt</h2>
            <Container className={classes.servicesWrapper}>
                {
                    locations.map(({ id, name }: Location) => (
                        <div key={id} className={classes.service} onClick={() => handleSelection(id)}>
                            <LocalHospital />
                            <h3>{name}</h3>
                        </div>
                    ))
                }
            </Container>
            {
                selectedLocation ?
                    <Contact {...selectedLocation} /> :
                    <h3>Nie wybrano żadnej lecznicy</h3>
            }
        </section>);
}

export default Services;
