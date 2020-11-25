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

function EmployeeForm(props: { employee: Employee | null, onCreate: Function }) {
    const initialFormValues: { [key: string]: Widget } = {
        firstName: {
            name: 'firstName',
            value: props.employee?.firstName || '',
            multiline: false,
        },
        lastName: {
            name: 'lastName',
            value: props.employee?.lastName || '',
            multiline: false,
        },
        description: {
            name: 'description',
            value: props.employee?.description || '',
            multiline: true,
        },
        photo: {
            name: 'photo',
            value: props.employee?.photo || '',
            multiline: false,
        },
        title: {
            name: 'title',
            value: props.employee?.title || '',
            multiline: false,
        }
    };

    const [formValues, setFormValues] = useState<{ [key: string]: Widget }>(_.cloneDeep(initialFormValues));
    const isCreateForm = !_.get(props.employee, 'firstName', false);

    return (
        <Card>
            <CardContent>
                <Typography>{isCreateForm ? 'Creating New Employee' : `Editing ${formValues.firstName.value} ${formValues.lastName.value}`}</Typography>
                <form key={formValues.toString()} className={styles.form} onSubmit={handleSubmit}>
                    {
                        Object.values(formValues)
                            .map((formElement: Widget) => (
                                <TextWidget key={formElement.name} {...formElement} onChange={handleChange}/>
                            ))
                    }
                    <div className={styles.buttonGroup}>
                        <Button
                            onClick={restoreFormValues}
                            disabled={_.isEqual(initialFormValues, formValues)}
                            className={styles.submitButton}
                            variant="contained"
                            color="secondary">
                            {isCreateForm ? 'Reset' : 'Restore'}
                        </Button>
                        <Button
                            disabled={_.isEqual(initialFormValues, formValues)}
                            className={styles.submitButton}
                            type="submit"
                            variant="contained"
                            color="primary">
                            {isCreateForm ? 'Create' : 'Save Changes'}
                        </Button>
                    </div>
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

        axiosInstance.post(`${CURRENT_ENV}/employees`, newEmployee).then((res: AxiosResponse<Employee>) => {
            console.log(res.data);
            props.onCreate({ type: 'AddOne', payload: res.data });
        });
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
