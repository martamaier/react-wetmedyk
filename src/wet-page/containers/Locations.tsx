import React, {useEffect, useState} from 'react';
import {Carousel} from 'react-bootstrap';
import {Location} from "../../models/Location.model";
import LocationCard from '../components/Location';
import {AxiosResponse} from 'axios';
import {CURRENT_ENV} from "../../environment";
import axiosInstance from "../../services/interceptor";

function Locations() {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <Carousel>
            {
                locations.map((location: Location) => (
                    <Carousel.Item key={location.id}>
                        <LocationCard key={location.id} {...location} />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );

    function getLocations() {
        axiosInstance.get(`${CURRENT_ENV}/locations`)
            .then((res: AxiosResponse<Location[]>) => {
                setLocations(res.data);
            });
    }
}

export default Locations;
