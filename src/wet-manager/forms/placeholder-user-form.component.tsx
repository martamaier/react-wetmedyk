import React from 'react';
import {PlaceholderUser} from "../models/user.interface";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import {Card, CardContent} from "@material-ui/core";

function PlaceholderUserForm({ data, onChange }: { data: PlaceholderUser, onChange: Function }) {
    const { name, username, phone, website, email, company } = data;
    const { city, zipcode, street, suite } = data.address;
    return (
        <Card>
            <CardContent>
                <Typography component="h3">Basic Information:</Typography>
                <div>{name}</div>
                <div>{username}</div>
                <div>{phone}</div>
                <div>
                    <a
                        href={`http://www.${website}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        {website}
                    </a>
                </div>
                <div>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
                <Divider />
                <Typography component="h3">Address:</Typography>
                <div>{street}, {suite}</div>
                <div>{zipcode} {city}</div>
                <Divider />
                <Typography component="h3">Company:</Typography>
                <div>{company.name}</div>
                <div>{company.bs}</div>
                <div>{company.catchPhrase}</div>
            </CardContent>
        </Card>
    );
}

export default PlaceholderUserForm;
