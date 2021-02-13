import {ReactNode} from "react";

export interface DataFetchProps<T> {
    data?: T[],
    children?: ReactNode;
}
