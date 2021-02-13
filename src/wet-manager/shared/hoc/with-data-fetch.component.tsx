import React, {ComponentType, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LinearProgress} from "@material-ui/core";
import {DataFetchInterface} from "../../models/data-fetch.interface";

function withDataFetch<T>(
    WrappedComponent: ComponentType<T>, { dataSelector, loadingSelector, dataLoader }: DataFetchInterface<T>,
) {
    return (props: any) => {
        const dispatch = useDispatch();
        const data = useSelector(dataSelector);
        const isLoading = useSelector(loadingSelector);

        useEffect(() => {
            if (!isLoading && !data.length) {
                dispatch(dataLoader());
            }
            /* eslint-disable react-hooks/exhaustive-deps */
        }, []);

        return isLoading ? <LinearProgress/>: <WrappedComponent {...props} data={data} />

    }
}

export default withDataFetch;
