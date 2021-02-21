import React, {useEffect, useState} from 'react';
import {Widget} from "../../models/widget.interface";
import {DropdownItem} from "./dropdown.component";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import * as _ from 'lodash';

function CheckboxWidget({items, name, value, onChange}: Widget & { onChange: Function }) {
    const [checkboxes, setCheckboxes] = useState<number[]>(Array.isArray(value) ? value : []);

    const handleChange = (checked: boolean, value: string | number) => {
        const newCheckboxes = checked
            ? [...checkboxes, Number.parseFloat(String(value))]
            : checkboxes.filter((box: number) => box !== value);
        onChange({ currentTarget: { value: newCheckboxes } }, name);
    };

    const getStartCase = (text: string): string => {
        return _.startCase(_.lowerCase(text));
    };

    const getValue = (val: any): number[] => {
        return Array.isArray(val) ? val : String(val)?.split(',')
            .map(v => Number.parseFloat(v))
            .filter(Boolean) || [];
    };

    useEffect(() => {
        setCheckboxes(getValue(value));
    }, [value]);

    return (
        <>
            <Typography>{getStartCase(name)}</Typography>
            {
                items?.map((check: DropdownItem) => (
                    <FormControlLabel
                        onChange={(event, checked) => handleChange(checked, check.value)}
                        key={check.name}
                        control={<Checkbox checked={!!checkboxes.find(element => element === check.value)} name={check.name}/>}
                        label={getStartCase(check.name)}/>

                ))
            }
        </>
    );
}

export default CheckboxWidget;
