import React, {useEffect, useState} from 'react';
import axiosInstance from "../../services/interceptor";
import {CURRENT_ENV} from "../../environment";
import {AxiosResponse} from "axios";
import {User} from "../models/user.interface";
import DataTable from "../../shared/table.component";
import {LinearProgress} from "@material-ui/core";
import {DataTypes} from "../../models/data-table.interface";

function UsersManager() {
    const [users, setUsers] = useState<User[]>([]);
    const columns: string[] = ['userName', 'dateCreated'];
    const columnTypes: DataTypes[] = [DataTypes.text, DataTypes.date];

    const getUsers = () => {
        axiosInstance.get(`${CURRENT_ENV}/users`).then((res: AxiosResponse<User[]>) => {
            setUsers(res.data);
        });
    }

    const handleDelete = (id: User) => {
        if (users.length !== 1) {
            console.log('can remove ', id);
        } else {
            console.log('cannot remove ', id);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <p>Users Manager</p>
            {
                users.length ? <DataTable
                    columns={columns}
                    columnTypes={columnTypes}
                    data={users}
                    onAdd={() => {}}
                    onEdit={() => {}}
                    onDelete={handleDelete} /> : <LinearProgress />
            }
        </>
    )
}

export default UsersManager;
