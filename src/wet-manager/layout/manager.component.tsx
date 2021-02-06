import React, {useEffect} from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useStyles} from "./manager.styles";
import Navigation from "./navigation.component";
import {Route, useHistory} from "react-router";
import EmployeesManager from "../containers/employees-manager.component";
import {BrowserRouter} from "react-router-dom";
import LocationsManager from "../containers/locations-manager.component";
import PostsManager from "../containers/posts-manager.component";
import UsersManager from "../containers/users-manager.component";
import SubscribersManager from "../containers/subscribers-manager.component";
import {PowerSettingsNew} from "@material-ui/icons";
import styles from './manager.module.scss';
import { AuthState } from "../../store/auth-store";
import { LogOutAction } from "../../store/auth-store/actions";
import { useDispatch, useSelector } from "react-redux";
import FilesManager from "../containers/files-manager.component";

function Manager() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const logOutAction = () => dispatch(LogOutAction());
    const authState = useSelector((state: { auth: AuthState }) => state.auth);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const html = document.querySelector('html');
        const header = document.querySelector('header');
        // @ts-ignore
        html.style.fontSize = '100%'
        // @ts-ignore
        header.style.padding = '0';
        // @ts-ignore
        header.style.alignItems = 'unset';
    }, []);

    return (
        <BrowserRouter>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            WetManager
                        </Typography>
                        <div className={styles.userWrapper}>
                            <Typography variant="h6" noWrap>
                                {authState.user?.userName}
                            </Typography>
                            <PowerSettingsNew className={styles.logoutButton} onClick={logOut}/>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}>
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <Navigation/>
                    <Divider/>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Route path="/manager/employees" component={EmployeesManager}/>
                    <Route path="/manager/locations" component={LocationsManager}/>
                    <Route path="/manager/posts" component={PostsManager}/>
                    <Route path="/manager/users" component={UsersManager}/>
                    <Route path="/manager/subscribers" component={SubscribersManager}/>
                    <Route path="/manager/files" component={FilesManager}/>
                </main>
            </div>
        </BrowserRouter>
    );

    function logOut() {
        logOutAction();
        history.push('/login');
    }
}

export default Manager;
