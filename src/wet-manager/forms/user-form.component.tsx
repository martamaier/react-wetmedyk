import React, {FormEvent, useState} from 'react';
import {Card, CardContent} from "@material-ui/core";
import FormButtons from "../shared/form-buttons.component";
import { Widget } from '../../models/widget.interface';
import TextWidget from "../../shared/widgets/text-widget.component";
import classes from './form.module.scss';
import * as _ from 'lodash';
import {User} from "../models/user.interface";
import {getCurrentUTCDate} from "../utils/date-formats";

interface UserFormInterface {
    onSubmit: Function;
}

function UserForm({ onSubmit }: UserFormInterface) {
    const getInitialFormState = (): { [key: string]: Widget } => {
        const { userName, password } = { userName: '', password: '' };

        return {
            userName: {
                name: 'userName',
                value: userName,
                multiline: false,
            },
            password: {
                name: 'password',
                value: password,
                multiline: false,
                type: 'password',
            }
        }
    }
    const [formValues, setFormValues] = useState<{ [key: string]: Widget }>(getInitialFormState());
    const updateForm = (name: string, value: string, form: { [key: string]: Widget }) => {
        setFormValues({
            ...form,
            [name]: {
                ...form[name],
                value,
            }
        })
    }
    const handleChange = (event: FormEvent<HTMLFormElement>, name: string) => {
        updateForm(name, event.currentTarget.value, formValues);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser: Partial<User> = buildUser({
            userName: formValues.userName.value,
            password: formValues.password.value,
        });

        onSubmit(newUser);
    }

    const buildUser = (user: Partial<User>): Partial<User> => {
        return {
            ...user,
            dateCreated: getCurrentUTCDate(),
        }
    }

    return (
        <Card>
            <CardContent>
                <form
                    className={classes.form}
                    onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                    {
                        Object.values(formValues).map(({ name, value, multiline, type }: Widget) => (
                            <TextWidget
                                key={name}
                                name={name}
                                value={value}
                                multiline={multiline}
                                type={type ? type : null}
                                onChange={handleChange} />
                        ))
                    }
                    <FormButtons
                        disabled={_.isEqual(getInitialFormState(), formValues)}
                        onRestore={() => {}}
                        isCreateForm={true} />
                </form>
            </CardContent>
        </Card>
    );
}

export default UserForm;
