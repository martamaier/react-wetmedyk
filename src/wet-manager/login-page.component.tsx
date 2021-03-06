import React, {FormEvent} from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './login-page.module.scss';
import {Login} from "../models/login.interface";
import {Redirect} from "react-router";
import {LogInAction} from "../store/auth-store/actions";
import {useDispatch, useSelector} from "react-redux";
import {AuthState} from "../store/auth-store";
import * as _ from 'lodash';
import {getAuthError} from "../store/auth-store/selectors";
import ErrorMessage from "./shared/error-message.component";

function LoginPage() {

    const dispatch = useDispatch();
    const authState = useSelector((state: { auth: AuthState }) => state.auth);
    const logIn = (props: Login) => dispatch(LogInAction(props));
    const error = useSelector(getAuthError);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const login: Login = {
            userName: String(formData.get('email')),
            password: String(formData.get('password')),
        }

        dispatch(logIn(login));
    }

    return (
        <Container maxWidth="xs">
            <CssBaseline/>
            <div className={styles.paper}>
                <Avatar className={styles.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    className={styles.form}
                    noValidate
                    onSubmit={(event: FormEvent<HTMLFormElement>) => onSubmit(event)}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus/>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"/>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.submit}>Sign In
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="http://wetmedyk.pl">
                        WetMedyk
                    </Link>
                    {' '}{new Date().getFullYear()}{'.'}
                </Typography>
            </Box>
            {
                error && error.length && <ErrorMessage text={error}/>
            }
            {
                !_.isEmpty(authState.user) && <Redirect to="/manager"/>
            }
        </Container>
    );
}

export default LoginPage;
