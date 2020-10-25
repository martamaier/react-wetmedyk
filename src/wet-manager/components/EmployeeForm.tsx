import React from "react";
import {Employee} from "../../models/Employee.model";
import {TextField, Typography} from "@material-ui/core";
import * as _ from 'lodash';
import styles from './EmployeeForm.module.scss';

function EmployeeForm(props: {employee: Employee | null}) {
    const newEmployee: Partial<Employee> = {
        firstName: props.employee?.firstName || '',
        lastName: props.employee?.lastName || '',
        description: props.employee?.description || '',
        photo: props.employee?.photo || '',
        title: props.employee?.title || '',
    };
    return(
        <>
            <Typography>{_.isEmpty(newEmployee.firstName) ? 'Creating New Employee' : `Editing ${newEmployee.firstName} ${newEmployee.lastName}`}</Typography>
            <form className={styles.form}>
                {
                    Object.entries(newEmployee)
                        .map(([key, value]) => (
                        key === 'description' ?
                            <TextField
                                className={styles.formItem}
                                multiline
                                key={key}
                                id={key}
                                label={_.startCase(key)}
                                variant="outlined"
                                value={value}/> :
                            <TextField
                                className={styles.formItem}
                                key={key}
                                id={key}
                                label={_.startCase(key)}
                                variant="outlined"
                                value={value} />
                    ))
                }
            </form>
        </>
    )
}

export default EmployeeForm;
