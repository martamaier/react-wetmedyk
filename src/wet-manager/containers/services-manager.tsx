import React, {useEffect, useState} from 'react';
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import {getPrimaryServices, getSelectedService} from "../../store/services-store/selectors";
import {
    AddService,
    DeleteService,
    LoadServices,
    SelectService,
    UpdateService
} from "../../store/services-store/actions";
import {DataFetchProps} from "../models/data-fetch-props.interface";
import DataTable from "../../shared/table.component";
import {DataTypes} from "../../models/data-table.interface";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getLocations} from "../../store/locations-store/selectors";
import {LoadLocations} from "../../store/locations-store/actions";
import {Location} from "../../models/location.interface";
import * as _ from 'lodash';
import {FormModes} from "../models/form-modes.types";
import {DataFetchInterface} from "../models/data-fetch.interface";
import withDataFetch from "../shared/hoc/with-data-fetch.component";
import ServiceForm from "../forms/service-form.component";
import {mapLocationToDropdownItem} from "../../utils/dropdown-items-map";

function ServicesManager({ data }: DataFetchProps<PrimaryServiceCard>) {
    const columns: string[] = ['title', 'details', 'description', 'available', 'order'];
    const columnTypes: DataTypes[] = [DataTypes.text, DataTypes.array, DataTypes.text, DataTypes.mappedArray, DataTypes.number];
    const locations = useSelector(getLocations);
    const isLoadingLocations = useSelector(getIsLoading);
    const selectedService = useSelector(getSelectedService);
    const dispatch = useDispatch();
    const [valueMap, setValueMap] = useState({});
    const [formMode, setFormMode] = useState<FormModes | null>(null);

    const handleAddService = () => {
        setFormMode(FormModes.Add);
        dispatch(SelectService(null));
    };

    const handleDeleteService = ({ id }: PrimaryServiceCard) => {
        dispatch(DeleteService(id));
    };

    const handleEditService = ({ id }: PrimaryServiceCard) => {
        dispatch(SelectService(id));
        setFormMode(FormModes.Edit);
    };

    const handleUpdateService = (service: PrimaryServiceCard) => {
        dispatch(formMode === FormModes.Add ? AddService(service) : UpdateService(service));
    };

    useEffect(() => {
        if (!locations.length && !isLoadingLocations) {
            dispatch(LoadLocations());
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, []);

    useEffect(() => {
        if (locations.length) {
            const newValueMap = locations.reduce((prev: { [key: string]: string }, { id, name }: Location) => {
                prev[id] = _.startCase(_.lowerCase(name));
                return prev;
            }, {});
            setValueMap(newValueMap);
        }
    }, [locations]);

    return (
        <>
            <p>Services Manager</p>
            <DataTable
                columns={columns}
                columnTypes={columnTypes}
                data={_.sortBy(data, 'order') || []}
                valueMap={valueMap}
                onAdd={handleAddService}
                onEdit={handleEditService}
                onDelete={handleDeleteService} />
            {
                (selectedService || formMode) && <ServiceForm
                    items={locations.map(mapLocationToDropdownItem)}
                    data={selectedService}
                    onSubmit={handleUpdateService} />
            }
        </>
    );
}

const options: DataFetchInterface<PrimaryServiceCard> = {
    dataLoader: LoadServices,
    loadingSelector: getIsLoading,
    dataSelector: getPrimaryServices,
};

export default withDataFetch(ServicesManager, options);
