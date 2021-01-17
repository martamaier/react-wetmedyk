import {DropdownItem} from "../shared/widgets/Dropdown";
import {Location} from '../models/Location.model';

export const mapLocationToDropdownItem = ({ id, name }: Location): DropdownItem => {
    return {
        name,
        value: id,
    }
};

export const mapPostStatusesToDropdownItem = ([name, value]: string[]): DropdownItem => {
    return {
        name,
        value,
    }
}
