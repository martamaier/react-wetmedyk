import React, {useState} from 'react';
import DataTable from "../../shared/table.component";
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
import withDataFetch from "../shared/hoc/with-data-fetch.component";
import {DataFetchProps} from "../models/data-fetch-props.interface";
import {DataFetchInterface} from "../models/data-fetch.interface";

function LocationsManager({ data }: DataFetchProps<Location>) {
    const dispatch = useDispatch();
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

    return (
        <>
            <p>Locations Manager</p>
                <DataTable
                    columnTypes={[]}
                    columns={columns}
                    data={data || []}
                    onAdd={handleAddLocation}
                    onDelete={handleDeleteLocation}
                    onEdit={handleEditLocation} />
            {
                (selectedLocation || formMode) &&
                    <LocationForm
                        data={selectedLocation}
                        onSubmit={handleUpdateLocation} />
            }
        </>
    );
}

const options: DataFetchInterface<Location> = {
    dataSelector: getLocations,
    loadingSelector: getIsLoading,
    dataLoader: LoadLocations,
};

export default withDataFetch(LocationsManager, options);
