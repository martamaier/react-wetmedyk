import {RootState} from "../../store";

export interface DataFetchInterface<T> {
    dataSelector: (state: RootState) => T[],
    loadingSelector: (state: RootState) => boolean,
    dataLoader: Function,
}
