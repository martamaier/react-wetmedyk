import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as _ from "lodash";
import TableBody from "@material-ui/core/TableBody";
import {Avatar, Button, Checkbox, Table} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Edit, PersonAdd} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {DataTableModel, DataTableRow, DataTypes, mapArrayToDataTable} from "../models/DataTable.model";

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

function DataTable<T>(props: { data: T[] }) {
    const classes = useStyles();
    const dataTable: DataTableModel<T> = mapArrayToDataTable(props.data);

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            {
                                dataTable.headings.map((key: string) => (
                                    <TableCell key={key}>{_.startCase(key)}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTable.rows.map((row: DataTableRow<T>[]) => (
                            <TableRow key={JSON.stringify(row)}>
                                <TableCell padding="checkbox">
                                    <Checkbox/>
                                </TableCell>
                                {row.map((column: DataTableRow<T>) => (
                                    <TableCell align="left" key={column.value}>
                                        {column.type === DataTypes.image ?
                                            <Avatar alt="avatar" src={column.value.toString()}/> : column.value}
                                    </TableCell>
                                ))}
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
                    startIcon={<PersonAdd/>}>
                    Add
                </Button>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<Edit/>}>
                    Edit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon/>}>
                    Delete
                </Button>
            </div>
        </>
    )
}

export default DataTable;
