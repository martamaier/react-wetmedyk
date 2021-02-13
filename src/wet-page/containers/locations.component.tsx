import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Location} from "../../models/location.interface";
import LocationCard from '../components/location.component';
import { LoadLocations } from "../../store/locations-store/actions";
import { getIsLoading, getLocations } from "../../store/locations-store/selectors";
import {DataFetchInterface} from "../../wet-manager/models/data-fetch.interface";
import withDataFetch from "../../wet-manager/shared/hoc/with-data-fetch.component";
import {DataFetchProps} from "../../wet-manager/models/data-fetch-props.interface";

function Locations({ data }: DataFetchProps<Location>) {

    return (
        <Carousel>
            {
                data?.length && data.reverse().map((location: Location) => (
                    <Carousel.Item key={location.id}>
                        <LocationCard key={location.id} {...location} />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

const options: DataFetchInterface<Location> = {
    dataLoader: LoadLocations,
    dataSelector: getLocations,
    loadingSelector: getIsLoading,
};

export default withDataFetch(Locations, options);
