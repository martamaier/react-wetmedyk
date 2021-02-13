import React from "react";
import {Employee} from "../../models/employee.interface";
import {Typography} from "@material-ui/core";
import * as _ from 'lodash';

import withForm from "../shared/hoc/with-form.component";
import {BaseForm, FormInterface, FormState} from "../models/form.interface";

const formConfig = {
    firstName: {
        name: 'firstName',
        value: '',
        multiline: false,
    },
    lastName: {
        name: 'lastName',
        value: '',
        multiline: false,
    },
    description: {
        name: 'description',
        value: '',
        multiline: true,
    },
    photo: {
        name: 'photo',
        value: '',
        multiline: false,
    },
    title: {
        name: 'title',
        value: '',
        multiline: false,
    }
};

const buildEmployee = (employee: Employee | null, form: FormState, userName: string): Partial<Employee> => {
    const changedValues: Partial<Employee> = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        description: form.description.value,
        photo: form.photo.value,
        title: form.title.value,
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
