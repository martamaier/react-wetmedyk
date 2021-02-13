import React from 'react';
import {Location} from "../../models/location.interface";
import * as _ from 'lodash';
import {Typography} from "@material-ui/core";
import withForm from "../shared/hoc/with-form.component";
import {BaseForm, FormInterface, FormState} from "../models/form.interface";

const formConfig = {
    name: {
        name: 'name',
        value: '',
        multiline: false,
    },
    street: {
        name: 'street',
        value: '',
        multiline: false,
    },
    city: {
        name: 'city',
        value: '',
        multiline: false,
    },
    zipCode: {
        name: 'zipCode',
        value: '',
        multiline: false,
    },
    phone: {
        name: 'phone',
        value: '',
        multiline: false,
    },
    openHours: {
        name: 'openHours',
        value: '',
        multiline: false,
    },
    mapUrl: {
        name: 'mapUrl',
        value: '',
        multiline: true,
    }
};

const buildLocation = (location: Location | null, form: FormState, userName: string = ''): Partial<Location> => {
    const changedValues: Partial<Location> = {
        name: form.name.value,
        street: form.street.value,
        city: form.city.value,
        zipCode: form.zipCode.value,
        phone: form.phone.value,
        openHours: form.openHours.value,
        mapUrl: form.mapUrl.value,
    };

    return _.merge({}, location ? location : {}, changedValues);
}

function LocationForm({ data }: BaseForm<Location>) {
    return (
        <Typography>
            {data ? `Editing ${data.name}` : 'Creating New Location'}
        </Typography>
    );
}

const options: FormInterface<Location> = {
    formConfig,
    buildItem: buildLocation,
}

export default withForm(LocationForm, options);
