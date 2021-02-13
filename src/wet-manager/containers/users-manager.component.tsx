import React, {useState} from 'react';
import {User} from "../models/user.interface";
import DataTable from "../../shared/table.component";
import {DataTypes} from "../../models/data-table.interface";
import {useDispatch} from "react-redux";
import {getIsLoading, getUsers} from "../../store/users-store/selectors";
import {AddUser, DeleteUser, LoadUsers} from "../../store/users-store/actions";
import {FormModes} from "../models/form-modes.types";
import UserForm from "../forms/user-form.component";
import withDataFetch from "../shared/hoc/with-data-fetch.component";
import {DataFetchProps} from "../models/data-fetch-props.interface";
import {DataFetchInterface} from "../models/data-fetch.interface";

function UsersManager( { data }: DataFetchProps<User>) {

    const dispatch = useDispatch();
    const columns: string[] = ['userName', 'dateCreated'];
    const columnTypes: DataTypes[] = [DataTypes.text, DataTypes.date];
    const [formMode, setFormMode] = useState<FormModes | null>(null);

    const handleDelete = (user: User) => {
        if (data?.length !== 1) {
            dispatch(DeleteUser(user.id));
        } else {
            console.log('cannot remove ', user);
        }
    }

    const handleAdd = () => {
        setFormMode(FormModes.Add);
    }

    const handleSaveUser = (user: User) => {
        dispatch(AddUser(user));
    }

    return (
        <>
            <p>Users Manager</p>
            <DataTable
                    columns={columns}
                    columnTypes={columnTypes}
                    data={data || []}
                    onAdd={handleAdd}
                    onEdit={() => {}}
                    onDelete={handleDelete} />
            {
                formMode && <UserForm data={null} onSubmit={handleSaveUser} />
            }
        </>
    );
}

const options: DataFetchInterface<User> = {
    dataSelector: getUsers,
    loadingSelector: getIsLoading,
    dataLoader: LoadUsers,
};

export default withDataFetch(UsersManager, options);
