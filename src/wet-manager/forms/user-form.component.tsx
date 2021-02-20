import React from 'react';
import {User} from "../models/user.interface";
import {getCurrentUTCDate} from "../utils/date-formats";
import withForm from "../shared/hoc/with-form.component";
import Typography from "@material-ui/core/Typography";
import {BaseForm, FormInterface, FormState} from "../models/form.interface";
import {INPUT_TYPE} from "../../models/widget.interface";

const formConfig: FormState = {
    userName: {
        name: 'userName',
        value: '',
        multiline: false,
    },
    password: {
        name: 'password',
        value: '',
        multiline: false,
        type: INPUT_TYPE.password,
    }
};

const buildUser = (user: Partial<User>, form: FormState, userName: string): Partial<User> => {
    return {
        ...user,
        userName: String(form.userName.value),
        password: String(form.password.value),
        dateCreated: getCurrentUTCDate(),
    }
}

function UserForm({data}: BaseForm<User>) {
    return (
        <Typography>{data ? 'Editing User' : 'Creating User'}</Typography>
    );
}

const options: FormInterface<User> = {
    formConfig,
    buildItem: buildUser,
}

export default withForm(UserForm, options);
