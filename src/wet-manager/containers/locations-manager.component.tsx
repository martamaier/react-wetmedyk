import React, {useEffect, useState} from 'react';
import DataTable from "../../shared/table.component";
import {LinearProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getLocations, getSelectedLocation} from "../../store/locations-store/selectors";
import {
    AddLocation,
    DeleteLocation,
    LoadLocations,
    SelectLocation,
    UpdateLocation
} from "../../store/locations-store/actions";
import {Location} from "../../models/location.interface";
import {FormModes} from "../models/form-modes.types";
import LocationForm from "../forms/location-form.component";

function LocationsManager() {
    const dispatch = useDispatch();
    const locations = useSelector(getLocations);
    const isLoading = useSelector(getIsLoading);
    const selectedLocation = useSelector(getSelectedLocation);
    const [formMode, setFormMode] = useState<FormModes | null>(null);
    const columns: string[] = ['name', 'street', 'city', 'zipCode', 'phone', 'openHours'];

    const handleEditLocation = ({ id }: Location) => {
        setFormMode(FormModes.Edit);
        dispatch(SelectLocation(id));
    }

    const handleAddLocation = () => {
        setFormMode(FormModes.Add);
        dispatch(SelectLocation(null));
    }

    const handleUpdateLocation = (location: Location) => {
        dispatch(formMode === FormModes.Add ? AddLocation(location) : UpdateLocation(location));
    }

    const handleDeleteLocation = ({ id }: Location) => {
        dispatch(DeleteLocation(id));
    }

    useEffect(()=> {
        if (!locations.length && !isLoading) {
            dispatch(LoadLocations());
        }
    }, [dispatch, locations, isLoading])

    return (
        <>
            <p>Locations Manager</p>
            {!isLoading ?
                <DataTable
                    columnTypes={[]}
                    columns={columns}
                    data={locations}
                    onAdd={handleAddLocation}
                    onDelete={handleDeleteLocation}
                    onEdit={handleEditLocation} /> : <LinearProgress/>
            }

            {
                (selectedLocation || formMode) &&
                    <LocationForm
                        location={selectedLocation}
                        onSubmit={handleUpdateLocation} />
            }
        </>
    );
}

export default LocationsManager;
