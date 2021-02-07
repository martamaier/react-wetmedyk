import React, {useEffect, useState} from 'react';
import {User} from "../models/user.interface";
import DataTable from "../../shared/table.component";
import {LinearProgress} from "@material-ui/core";
import {DataTypes} from "../../models/data-table.interface";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoading, getUsers} from "../../store/users-store/selectors";
import {AddUser, LoadUsers} from "../../store/users-store/actions";
import {FormModes} from "../models/form-modes.types";
import UserForm from "../forms/user-form.component";

function UsersManager() {
    const users = useSelector(getUsers);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const columns: string[] = ['userName', 'dateCreated'];
    const columnTypes: DataTypes[] = [DataTypes.text, DataTypes.date];
    const [formMode, setFormMode] = useState<FormModes | null>(null);

    const handleDelete = (id: User) => {
        if (users.length !== 1) {
            console.log('can remove ', id);
        } else {
            console.log('cannot remove ', id);
        }
    }

    const handleAdd = () => {
        setFormMode(FormModes.Add);
    }

    const handleSaveUser = (user: User) => {
        dispatch(AddUser(user));
        console.log(user);
    }

    useEffect(() => {
        if (!users.length && !isLoading) {
            dispatch(LoadUsers());
        }
    }, []);

    return (
        <>
            <p>Users Manager</p>
            {
                users.length ? <DataTable
                    columns={columns}
                    columnTypes={columnTypes}
                    data={users}
                    onAdd={handleAdd}
                    onEdit={() => {}}
                    onDelete={handleDelete} /> : <LinearProgress />
            }
            {
                formMode && <UserForm onSubmit={handleSaveUser} />
            }
        </>
    );
}

export default UsersManager;
