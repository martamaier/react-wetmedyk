import React, {FormEvent, useEffect, useState} from "react";
import {Employee} from "../../models/employee.interface";
import {Card, CardContent, Typography} from "@material-ui/core";
import * as _ from 'lodash';
import styles from './form.module.scss';
import {Widget} from "../../models/widget.interface";
import TextWidget from "../../shared/widgets/text-widget.component";
import FormButtons from "./form-buttons.component";

interface EmployeeFormInterface {
    employee: Employee | null;
    onSubmit: Function;
}

function EmployeeForm({employee, onSubmit}: EmployeeFormInterface) {
    const getInitialFormState = (employee: Employee | null): { [key: string]: Widget } => {
        const addModeStartValues = {
            firstName: '',
            lastName: '',
            description: '',
            photo: '',
            title: '',
        };
        const {firstName, lastName, description, photo, title} = employee || addModeStartValues;

        return {
            firstName: {
                name: 'firstName',
                value: firstName,
                multiline: false,
            },
            lastName: {
                name: 'lastName',
                value: lastName,
                multiline: false,
            },
            description: {
                name: 'description',
                value: description,
                multiline: true,
            },
            photo: {
                name: 'photo',
                value: photo,
                multiline: false,
            },
            title: {
                name: 'title',
                value: title,
                multiline: false,
            }
        };
    }

    const [formValues, setFormValues] = useState<{ [key: string]: Widget }>(getInitialFormState(employee));
    const isCreateForm = !_.get(employee, 'firstName', false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const formData = new FormData(event.target as HTMLFormElement);
        // const file = formData.get('photo');
        const newEmployee = buildEmployee(employee);
        onSubmit(newEmployee);
    }

    const buildEmployee = (employee: Employee | null): Partial<Employee> => {
        const changedValues: Partial<Employee> = {
            firstName: formValues.firstName.value,
            lastName: formValues.lastName.value,
            description: formValues.description.value,
            photo: formValues.photo.value,
            title: formValues.title.value,
        }

        return _.merge({}, employee ? employee : {}, changedValues);
    };

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
        });
    }

    const restoreFormValues = () => {
        setFormValues(getInitialFormState(employee));
    }

    useEffect(() => {
        setFormValues(getInitialFormState(employee));
    }, [employee]);

    return (
        <Card>
            <CardContent>
                <Typography>{isCreateForm ? 'Creating New Employee' : `Editing ${formValues.firstName.value} ${formValues.lastName.value}`}</Typography>
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
                        disabled={_.isEqual(getInitialFormState(employee), formValues)}/>
                </form>
            </CardContent>
        </Card>
    )
}

export default EmployeeForm;
