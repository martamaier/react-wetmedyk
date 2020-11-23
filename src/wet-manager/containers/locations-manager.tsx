import React, {useEffect} from 'react';
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getLocations } from "../../store/locations-store/selectors";
import { LoadLocations } from "../../store/locations-store/actions";

function LocationsManager() {
    const locations = useSelector(getLocations);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();

    useEffect(()=> {
        if (!locations.length && !isLoading) {
            dispatch(LoadLocations());
        }
    }, [dispatch, locations, isLoading])

    return locations.length ? <DataTable data={locations} onAdd={console.log} onDelete={console.log} onEdit={console.log} /> : <LinearProgress/>
}

export default LocationsManager;
