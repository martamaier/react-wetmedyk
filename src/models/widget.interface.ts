import {DropdownItem} from "../shared/widgets/dropdown.component";

export enum INPUT_TYPE {
    text = 'text',
    password = 'password',
    number = 'number',
}

export enum WIDGET_TYPE {
    text = 'text',
    checkbox = 'checkbox',
    dropdown = 'dropdown',
}

export interface Widget {
    name: string;
    value: string | number;
    multiline: boolean;
    select?: boolean;
    type?: INPUT_TYPE | null;
    items?: DropdownItem[];
    widgetType?: WIDGET_TYPE;
    values?: string[] | number[] | null;
}
