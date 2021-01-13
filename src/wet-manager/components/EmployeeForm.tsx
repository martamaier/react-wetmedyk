import React, {ChangeEvent, FormEvent, useState} from "react";
import {Employee} from "../../models/Employee.model";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import * as _ from 'lodash';
import styles from './EmployeeForm.module.scss';
import {Widget} from "../../models/Widget.model";
import TextWidget from "../../shared/widgets/TextWidget";
import axiosInstance from "../../services/interceptor";
import {CURRENT_ENV} from "../../environment";
import {AxiosResponse} from "axios";
import FormButtons from "./FormButtons";

function EmployeeForm({ employee, onCreate }: { employee: Employee | null, onCreate: Function }) {
    const initialFormValues: { [key: string]: Widget } = {
        firstName: {
            name: 'firstName',
            value: employee?.firstName || '',
            multiline: false,
        },
        lastName: {
            name: 'lastName',
            value: employee?.lastName || '',
            multiline: false,
        },
        description: {
            name: 'description',
            value: employee?.description || '',
            multiline: true,
        },
        photo: {
            name: 'photo',
            value: employee?.photo || '',
            multiline: false,
        },
        title: {
            name: 'title',
            value: employee?.title || '',
            multiline: false,
        }
    };

    const [formValues, setFormValues] = useState<{ [key: string]: Widget }>(_.cloneDeep(initialFormValues));
    const isCreateForm = !_.get(employee, 'firstName', false);

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
                        disabled={_.isEqual(initialFormValues, formValues)} />
                </form>
            </CardContent>
        </Card>
    )

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event);
        console.log((event.target as any).elements.firstName.value);

        const newEmployee = {
            firstName: (event.target as any).elements.firstName.value,
            lastName: (event.target as any).elements.lastName.value,
            description: (event.target as any).elements.description.value,
            photo: (event.target as any).elements.photo.value,
            title: (event.target as any).elements.title.value,
        };

        console.log(newEmployee);

        // axiosInstance.post(`${CURRENT_ENV}/employees`, newEmployee).then((res: AxiosResponse<Employee>) => {
        //     console.log(res.data);
        //     onCreate({ type: 'AddOne', payload: res.data });
        // });
    }

    function handleChange(event: ChangeEvent, name: string) {
        setFormValues({
            ...formValues,
            [name]: {
                ...formValues[name],
                value: (event.target as any).value,
            }
        });
    }

    function restoreFormValues() {
        setFormValues(_.cloneDeep(initialFormValues));
    }
}

export default EmployeeForm;
