import React from 'react';
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import {BaseForm, FormInterface} from "../models/form.interface";
import {Typography} from "@material-ui/core";
import withForm from "../shared/hoc/with-form.component";
import {INPUT_TYPE, WIDGET_TYPE} from "../../models/widget.interface";
import {ICON_NAMES} from "../../shared/services-icon.component";

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
    }
};

function ServiceForm({ data }: BaseForm<PrimaryServiceCard>) {
    return (
        <Typography>{ data ? 'Editing Service' : 'Creating Service' }</Typography>
    );
}

const options: FormInterface<PrimaryServiceCard> = {
    formConfig,
    buildItem: () => {},
};

export default withForm(ServiceForm, options);
