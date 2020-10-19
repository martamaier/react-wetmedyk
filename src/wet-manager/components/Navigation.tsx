import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {LocalPostOffice, LocationOn, PersonPin, PostAdd, SupervisorAccount} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";

function Navigation() {
    return (
        <List>
            <ListItem button>
                <ListItemIcon>
                    <SupervisorAccount/>
                </ListItemIcon>
                <ListItemText>
                    Employees
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LocationOn/>
                </ListItemIcon>
                <ListItemText>
                    Locations
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PostAdd />
                </ListItemIcon>
                <ListItemText>
                    News
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PersonPin />
                </ListItemIcon>
                <ListItemText>
                    Users
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LocalPostOffice />
                </ListItemIcon>
                <ListItemText>
                    Subscribers
                </ListItemText>
            </ListItem>
        </List>

    )
}

export default Navigation;
