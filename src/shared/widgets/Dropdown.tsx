import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {getLocations, getSelectedLocationId} from "../../store/locations-store/selectors";
import {Location} from "../../models/Location.model";
import {SelectLocations} from "../../store/locations-store/actions";
import {useStyles} from "./DropdownStyles";
import {stringToStartCase} from "../../utils/content-handlers";

function LocationsDropdown() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedLocation = useSelector(getSelectedLocationId);
    const locations = useSelector(getLocations);
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(SelectLocations(event.target.value as any));
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel className={classes.label} id="demo-simple-select-outlined-label">Lecznice</InputLabel>
            <Select className={classes.select}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectedLocation ? selectedLocation : 'all'}
                    onChange={handleChange}
                    label="Lecznice">
                {
                    locations.map(({ id, name }: Location) => (
                        <MenuItem
                            key={id}
                            className={classes.select}
                            value={id}>{stringToStartCase(name)}</MenuItem>

                    ))
                }
                <MenuItem className={classes.select} value="all">Wszystkie</MenuItem>
            </Select>
        </FormControl>
    );
}

export default LocationsDropdown;
