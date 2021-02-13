import {Widget} from "../../models/widget.interface";
import {ReactNode} from "react";

export interface FormState {
    [key: string]: Widget
}

export interface BaseForm<T> {
    data: T | null;
    onSubmit: Function;
    children?: ReactNode;
    userName?: string;
}

export interface FormInterface<T> {
    formConfig: FormState;
    buildItem: Function;
}
