import {Widget} from "../../models/widget.interface";
import {ReactNode} from "react";
import {DropdownItem} from "../../shared/widgets/dropdown.component";

export interface FormState {
    [key: string]: Widget
}

export interface BaseForm<T> {
    data: T | null;
    onSubmit: Function;
    children?: ReactNode;
    userName?: string;
    items?: DropdownItem[];
}

export interface FormInterface<T> {
    formConfig: FormState;
    buildItem: Function;
}
