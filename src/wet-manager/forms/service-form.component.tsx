import React from 'react';
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import {BaseForm, FormInterface, FormState} from "../models/form.interface";
import {Typography} from "@material-ui/core";
import withForm from "../shared/hoc/with-form.component";
import {INPUT_TYPE, WIDGET_TYPE} from "../../models/widget.interface";
import {ICON_NAMES} from "../../shared/services-icon.component";
import * as _ from 'lodash';

const formConfig = {
    title: {
        name: 'title',
        value: '',
        multiline: false,
        type: INPUT_TYPE.text,
    },
    icon: {
        name: 'icon',
        value: '',
        multiline: false,
        select: true,
        items: Object.entries(ICON_NAMES).map(([key, value]: string[]) => ({ name: key, value: value })),
        widgetType: WIDGET_TYPE.dropdown,
    },
    description: {
        name: 'description',
        value: '',
        multiline: true,
    },
    available: {
        name: 'available',
        value: '',
        multiline: false,
        widgetType: WIDGET_TYPE.checkbox,
    },
    details: {
        name: 'details',
        value: '',
        multiline: true,
    }
};

const buildItem = (service: PrimaryServiceCard | null, form: FormState, userName: string): Partial<PrimaryServiceCard> => {
    const serviceStarter = {
        image: '',
    };
    const changedValues = {
        title: String(form.title.value),
        icon: String(form.icon.value),
        description: String(form.description.value),
        available: String(form.available.value).split(',')
            .map(v => Number.parseFloat(v))
            .filter(Boolean) || [],
        details: String(form.details.value).split(',').map((detail: string) => detail.trim()),
    };
    return _.merge({}, service ? { id: service.id, image: '' } : serviceStarter, changedValues);
};

function ServiceForm({ data }: BaseForm<PrimaryServiceCard>) {
    return (
        <Typography>{ data ? 'Editing Service' : 'Creating Service' }</Typography>
    );
}

const options: FormInterface<PrimaryServiceCard> = {
    formConfig,
    buildItem,
};

export default withForm(ServiceForm, options);
