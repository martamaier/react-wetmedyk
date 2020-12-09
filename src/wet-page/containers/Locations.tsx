import React, {useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import {Location} from "../../models/Location.model";
import LocationCard from '../components/Location';
import { useDispatch, useSelector } from "react-redux";
import { LoadLocations } from "../../store/locations-store/actions";
import { getIsLoading, getLocations } from "../../store/locations-store/selectors";

function Locations() {
    const locations = useSelector(getLocations);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!locations.length && !isLoading) {
            dispatch(LoadLocations());
        }
    }, [dispatch, locations, isLoading]);

    return (
        <Carousel>
            {
                locations.length && locations.reverse().map((location: Location) => (
                    <Carousel.Item key={location.id}>
                        <LocationCard key={location.id} {...location} />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default Locations;
