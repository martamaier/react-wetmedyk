import React, {useEffect, useState} from 'react';
import {AxiosResponse} from 'axios';
import {CURRENT_ENV} from "../../environment";
import DataTable from "../../shared/table";
import {LinearProgress} from "@material-ui/core";
import axiosInstance from "../../services/interceptor";

function LocationsManager() {
    const [locations, setLocations] = useState<Location[]>([])

    useEffect(()=> {
        getLocations()
    }, [])

    return locations.length ? <DataTable data={locations} onAdd={console.log} onDelete={console.log} onEdit={console.log} /> : <LinearProgress/>


    function getLocations() {
        axiosInstance.get(`${CURRENT_ENV}/locations`).then((res:AxiosResponse<Location[]>)=> {
            setLocations(res.data)
        })
    }
}

export default LocationsManager;
