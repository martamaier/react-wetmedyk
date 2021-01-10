import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import {Select} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {getLocations, getSelectedLocationId} from "../../store/locations-store/selectors";
import {Location} from "../../models/Location.model";
import {SelectLocation} from "../../store/locations-store/actions";
import {useStyles} from "./DropdownStyles";
import {stringToStartCase} from "../../utils/content-handlers";

function LocationsDropdown() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedLocation = useSelector(getSelectedLocationId);
    const locations = useSelector(getLocations);
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(SelectLocation(event.target.value as any));
    };

    return (
        <>
            {
                locations.length ?
                <FormControl variant="outlined" className={classes.root}>
                    <Select className={classes.select}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={selectedLocation}
                            classes={{ iconOutlined: classes.iconOutlined }}
                            onChange={handleChange}>
                        {
                            locations.map(({ id, name }: Location) => (
                                <MenuItem
                                    className={classes.size}
                                    key={id}
                                    value={id}>{stringToStartCase(name)}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl> : null
            }
        </>
    );
}

export default LocationsDropdown;
