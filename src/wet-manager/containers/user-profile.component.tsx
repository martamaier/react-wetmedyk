import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios, {AxiosResponse} from "axios";
import {LinearProgress} from "@material-ui/core";
import {PlaceholderUser} from "../models/user.interface";
import PlaceholderUserForm from "../forms/placeholder-user-form.component";

function UserProfile() {
    const params = useParams<{ id: string }>();
    const [user, setUser] = useState<PlaceholderUser | null>(null);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((res: AxiosResponse<PlaceholderUser>) => {
                setUser(res.data);
            });
        return () => {};
    }, [params]);

    return user ?
        <>
            <p>User Profile</p>
            <PlaceholderUserForm data={user} onChange={setUser}/>
        </> : <LinearProgress/>;
}

export default UserProfile;
