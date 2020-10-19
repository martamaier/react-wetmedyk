import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {LocalPostOffice, LocationOn, PersonPin, PostAdd, SupervisorAccount} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <List>
            <Link to="/manager/employees">
                <ListItem button>
                    <ListItemIcon>
                        <SupervisorAccount/>
                    </ListItemIcon>
                    <ListItemText>
                        Employees
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/manager/locations">
                <ListItem button>
                    <ListItemIcon>
                        <LocationOn/>
                    </ListItemIcon>
                    <ListItemText>
                        Locations
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/manager/posts">
                <ListItem button>
                    <ListItemIcon>
                        <PostAdd/>
                    </ListItemIcon>
                    <ListItemText>
                        News
                    </ListItemText>
                </ListItem>
            </Link>

            <Link to="/manager/users">
                <ListItem button>
                    <ListItemIcon>
                        <PersonPin/>
                    </ListItemIcon>
                    <ListItemText>
                        Users
                    </ListItemText>
                </ListItem>
            </Link>
            <Link to="/manager/subscribers">
                <ListItem button>
                    <ListItemIcon>
                        <LocalPostOffice/>
                    </ListItemIcon>
                    <ListItemText>
                        Subscribers
                    </ListItemText>
                </ListItem>
            </Link>
        </List>

    )
}

export default Navigation;
