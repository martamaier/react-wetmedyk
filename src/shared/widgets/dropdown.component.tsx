import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import {InputLabel, Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {useStyles} from "./dropdown.styles";
import {stringToStartCase} from "../../utils/content-handlers";
import * as _ from 'lodash';
import styles from "../../wet-manager/forms/form.module.scss";

export enum STYLING_TYPES {
    Default = 'default',
    Custom = 'custom',
}

export interface DropdownItem {
    value: number | string;
    name: string;
}

export interface DropdownProps {
    items: DropdownItem[];
    onChange: any;
    value: string | number;
    styling: STYLING_TYPES;
    label?: string;
}

function Dropdown({ items, onChange, value, styling, label }: DropdownProps) {
    const classes = useStyles();
    const customStyling = styling === STYLING_TYPES.Custom;

    return (
        <>
            {
                items.length ?
                <FormControl variant="outlined" className={customStyling ? classes.root : styles.formItem}>
                    {
                        label && <InputLabel id="demo-simple-select-disabled-label">{_.startCase(label)}</InputLabel>
                    }
                    <Select className={customStyling ? classes.select : ''}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={value}
                            classes={customStyling ? { iconOutlined: classes.iconOutlined } : {}}
                            onChange={onChange}>
                        {
                            items.map(({ value, name }: DropdownItem) => (
                                <MenuItem
                                    className={customStyling ? classes.size : ''}
                                    key={value}
                                    value={value}>{stringToStartCase(name)}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl> : null
            }
        </>
    );
}

export default Dropdown;
