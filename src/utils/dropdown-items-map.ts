import {DropdownItem} from "../shared/widgets/dropdown.component";
import {Location} from '../models/location.interface';

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
