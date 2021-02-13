import React, {ComponentType, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LinearProgress} from "@material-ui/core";
import {DataFetchInterface} from "../../models/data-fetch.interface";
import ErrorMessage from "../error-message.component";
import { getErrors } from '../../../store/selectors';

function withDataFetch<T>(
    WrappedComponent: ComponentType<T>, { dataSelector, loadingSelector, dataLoader }: DataFetchInterface<T>,
) {
    return (props: any) => {
        const dispatch = useDispatch();
        const data = useSelector(dataSelector);
        const isLoading = useSelector(loadingSelector);
        const error = useSelector(getErrors);

        useEffect(() => {
            if (!isLoading && !data.length) {
                dispatch(dataLoader());
            }
            /* eslint-disable react-hooks/exhaustive-deps */
        }, []);

        if (error.length) return <ErrorMessage text={error.join(' ')} />
        return isLoading ? <LinearProgress/>: <WrappedComponent {...props} data={data} />

    }
}

export default withDataFetch;
