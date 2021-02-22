import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
    AssignmentInd,
    AttachFile,
    LocationOn,
    People,
    PersonPin,
    Pets,
    PostAdd
} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from "react-router-dom";
import {ManagerRoutes} from "../models/manager-routes.interface";
import classes from './navigation.module.scss';

const routes: ManagerRoutes[] = [
    {
        path: '/manager/employees',
        icon: <People />,
        displayName: 'Employees',
    },
    {
        path: '/manager/locations',
        icon: <LocationOn/>,
        displayName: 'Locations',
    },
    {
        path: '/manager/posts',
        icon: <PostAdd/>,
        displayName: 'News',
    },
    {
        path: '/manager/users',
        icon: <PersonPin/>,
        displayName: 'Users',
    },
    {
        path: '/manager/services',
        icon: <Pets />,
        displayName: 'Services',
    },
    {
        path: '/manager/files',
        icon: <AttachFile />,
        displayName: 'Files',
    },
    {
        path: '/manager/customers',
        icon: <AssignmentInd />,
        displayName: 'Customers',
    },
];

function Navigation() {

    return (
        <List>
            {
                routes.map((route: ManagerRoutes) => (
                    <NavLink
                        key={route.path}
                        to={route.path}
                        activeClassName={classes.selected}>
                        <ListItem button>
                            <ListItemIcon>
                                {route.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {route.displayName}
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                ))
            }
        </List>
    )
}

export default Navigation;
