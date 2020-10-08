import React from 'react';
import {Carousel} from 'react-bootstrap';
import {locations} from "../data/locations";
import * as _ from "lodash";
import {Location} from "../models/Location.model";
import LocationCard from './../components/Location';

class Locations extends React.Component<any, any> {
    state = {
        locations: _.cloneDeep(locations),
    }

    render() {
        return (
            <Carousel>
                {
                    this.state.locations.map((location: Location) => (
                        <Carousel.Item key={location.id}>
                            <LocationCard key={location.id} {...location} />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        );
    }
}

export default Locations;
