import React from "react";
import {Employee} from "../../models/employee.interface";
import {Typography} from "@material-ui/core";
import * as _ from 'lodash';

import withForm from "../shared/hoc/with-form.component";
import {BaseForm, FormInterface, FormState} from "../models/form.interface";
import {INPUT_TYPE} from "../../models/widget.interface";

const formConfig = {
    firstName: {
        name: 'firstName',
        value: '',
        multiline: false,
        type: INPUT_TYPE.text,
    },
    lastName: {
        name: 'lastName',
        value: '',
        multiline: false,
        type: INPUT_TYPE.text,
    },
    description: {
        name: 'description',
        value: '',
        multiline: true,
        type: INPUT_TYPE.text,
    },
    photo: {
        name: 'photo',
        value: '',
        multiline: false,
        type: INPUT_TYPE.text,
    },
    title: {
        name: 'title',
        value: '',
        multiline: false,
        type: INPUT_TYPE.text,
    },
    order: {
        name: 'order',
        value: 0,
        multiline: false,
        type: INPUT_TYPE.number,
    }
};

const buildEmployee = (employee: Employee | null, form: FormState, userName: string): Partial<Employee> => {
    const changedValues: Partial<Employee> = {
        firstName: String(form.firstName.value),
        lastName: String(form.lastName.value),
        description: String(form.description.value),
        photo: String(form.photo.value),
        title: String(form.title.value),
        order: Number.parseFloat(String(form.order.value)),
    }

    return _.merge({}, employee ? employee : {}, changedValues);
};

function EmployeeForm({ data }: BaseForm<Employee>) {
    return (
        <Typography>
            {data ? `Editing ${data?.firstName} ${data?.lastName}`
                : 'Creating New Employee'}
        </Typography>
    )
}

const options: FormInterface<Employee> = {
    formConfig,
    buildItem: buildEmployee,
}

export default withForm(EmployeeForm, options);
