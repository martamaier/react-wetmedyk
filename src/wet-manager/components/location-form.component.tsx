import React, {FormEvent, useEffect, useState} from 'react';
import {Location} from "../../models/location.interface";
import {Widget} from "../../models/widget.interface";
import * as _ from 'lodash';
import {Card, CardContent, Typography} from "@material-ui/core";
import styles from "./form.module.scss";
import TextWidget from "../../shared/widgets/text-widget.component";
import FormButtons from "./form-buttons.component";

interface LocationFormInterface {
    location: Location | null;
    onSubmit: Function;
}

function LocationForm({ location, onSubmit }: LocationFormInterface) {
    const getInitialFormState = (location: Location | null): { [key: string]: Widget } => {
        const addModeStartValues = {
            name: '',
            street: '',
            city: '',
            zipCode: '',
            phone: '',
            openHours: '',
            mapUrl: '',
        };
        const { name, street, city, zipCode, phone, openHours, mapUrl } = location || addModeStartValues;

        return {
            name: {
                name: 'name',
                value: name,
                multiline: false,
            },
            street: {
                name: 'street',
                value: street,
                multiline: false,
            },
            city: {
               name: 'city',
               value: city,
               multiline: false,
            },
            zipCode: {
                name: 'zipCode',
                value: zipCode,
                multiline: false,
            },
            phone: {
                name: 'phone',
                value: phone,
                multiline: false,
            },
            openHours: {
                name: 'openHours',
                value: openHours,
                multiline: false,
            },
            mapUrl: {
                name: 'mapUrl',
                value: mapUrl,
                multiline: true,
            }
        };
    };

    const [formValues, setFormValues] = useState<{ [key: string]: Widget }>(getInitialFormState(location));
    const isCreateForm = !location;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newLocation = buildLocation(location);
        onSubmit(newLocation);
    }

    const buildLocation = (location: Location | null): Partial<Location> => {
        const changedValues: Partial<Location> = {
            name: formValues.name.value,
            street: formValues.street.value,
            city: formValues.city.value,
            zipCode: formValues.zipCode.value,
            phone: formValues.phone.value,
            openHours: formValues.openHours.value,
            mapUrl: formValues.mapUrl.value,
        };

        return _.merge({}, location ? location : {}, changedValues);
    }

    const handleChange = (event: FormEvent<HTMLFormElement>, name: string) => {
        updateForm(name, String(event.currentTarget.value), formValues);
    }

    const updateForm = (name: string, value: string, form: { [key: string]: Widget }) => {
        setFormValues({
            ...form,
            [name]: {
                ...form[name],
                value,
            }
        })
    }

    const restoreFormValues = () => {
        setFormValues(getInitialFormState(location));
    }

    useEffect(() => {
        setFormValues(getInitialFormState(location));
    }, [location]);

    return (
        <Card>
            <CardContent>
                <Typography>{isCreateForm ? 'Creating New Location' : `Editing ${formValues.name.value}`}</Typography>
                <form key={formValues.toString()} className={styles.form} onSubmit={handleSubmit}>
                    {
                        Object.values(formValues)
                            .map((formElement: Widget) => (
                                <TextWidget
                                    key={formElement.name}
                                    {...formElement}
                                    onChange={handleChange}/>
                            ))
                    }
                    <FormButtons
                        isCreateForm={isCreateForm}
                        onRestore={restoreFormValues}
                        disabled={_.isEqual(getInitialFormState(location), formValues)} />
                </form>
            </CardContent>
        </Card>
    );
}

export default LocationForm;
