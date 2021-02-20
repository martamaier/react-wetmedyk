import {DropdownItem} from "../shared/widgets/dropdown.component";

export enum INPUT_TYPE {
    text = 'text',
    password = 'password',
    number = 'number',
}

export interface Widget {
    name: string;
    value: string | number;
    multiline: boolean;
    select?: boolean;
    type?: INPUT_TYPE | null;
    items?: DropdownItem[];
}
