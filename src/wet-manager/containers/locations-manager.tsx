import React, {useEffect} from 'react';
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getLocations} from "../../store/locations-store/selectors";
import {LoadLocations} from "../../store/locations-store/actions";
import {DataTypes} from "../../models/DataTable.model";

function LocationsManager() {
    const locations = useSelector(getLocations);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const columns: string[] = ['name', 'street', 'city', 'zipCode', 'phone', 'openHours', 'mapUrl']


    useEffect(()=> {
        if (!locations.length && !isLoading) {
            dispatch(LoadLocations());
        }
    }, [dispatch, locations, isLoading])

    return locations.length ? <DataTable
        columnTypes={[]}
        columns={columns}
        data={locations}
        onAdd={console.log}
        onDelete={console.log}
        onEdit={console.log} /> : <LinearProgress/>
}

export default LocationsManager;
