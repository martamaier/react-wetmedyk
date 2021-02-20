import React, {useEffect, useState} from 'react';
import withDataFetch from "../shared/hoc/with-data-fetch.component";
import {DataFetchInterface} from "../models/data-fetch.interface";
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import {getPrimaryServices} from "../../store/services-store/selectors";
import {LoadServices} from "../../store/services-store/actions";
import {DataFetchProps} from "../models/data-fetch-props.interface";
import DataTable from "../../shared/table.component";
import {DataTypes} from "../../models/data-table.interface";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getLocations} from "../../store/locations-store/selectors";
import {LoadLocations} from "../../store/locations-store/actions";
import {Location} from "../../models/location.interface";
import * as _ from 'lodash';

function ServicesManager({ data }: DataFetchProps<PrimaryServiceCard>) {
    const columns: string[] = ['title', 'details', 'description', 'available'];
    const columnTypes: DataTypes[] = [DataTypes.text, DataTypes.array, DataTypes.text, DataTypes.mappedArray];
    const locations = useSelector(getLocations);
    const isLoadingLocations = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const [valueMap, setValueMap] = useState({});

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
                data={data || []}
                valueMap={valueMap}
                onAdd={() => {}}
                onEdit={() => {}}
                onDelete={() => {}} />
        </>
    );
}

const options: DataFetchInterface<PrimaryServiceCard> = {
    dataLoader: LoadServices,
    loadingSelector: getIsLoading,
    dataSelector: getPrimaryServices,
};

export default withDataFetch(ServicesManager, options);
