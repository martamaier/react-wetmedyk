import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as _ from "lodash";
import TableBody from "@material-ui/core/TableBody";
import {Employee} from "../models/Employee.model";
import {Avatar, Button, Checkbox, Table} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Edit, PersonAdd} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 400,
    },
    button: {
        margin: theme.spacing(1),
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}));

function DataTable(props: { data: Employee[] }) {
    const classes = useStyles();

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            {
                                Object.keys(props.data[0]).map((key: string) => (
                                    <TableCell key={key}>{_.startCase(key)}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row: Employee) => (
                            <TableRow key={row.id}>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">{row.firstName}</TableCell>
                                <TableCell align="left">{row.lastName}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                                <TableCell align="left">
                                    <Avatar alt="Cindy Baker" src={row.photo}/>
                                </TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.buttonGroup}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<PersonAdd />}>
                    Add
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<Edit />}>
                    Edit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </div>
        </>
    )
}

export default DataTable;
