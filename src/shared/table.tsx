import React, {useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as _ from "lodash";
import TableBody from "@material-ui/core/TableBody";
import {Button, Checkbox, Table} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Edit, PersonAdd} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {FormModes} from "../wet-manager/models/FormModes";
import {DataTableInterface, DataTypes} from "../models/DataTable.model";
import Avatar from "@material-ui/core/Avatar";

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



function DataTable<T>({ data, onAdd, onEdit, onDelete, columns, columnTypes }: DataTableInterface<T>) {
    const classes = useStyles();
    const [selected, setSelected] = useState<number | null>(null);
    const handleSelection = (selectedId: number) => {
        setSelected(selected !== selectedId ? selectedId : null);
    }

    const handleSelectionAction = (action: FormModes) => {
        switch (action) {
            case FormModes.Add:
                onAdd();
                break;
            case FormModes.Edit:
                onEdit(data[selected as number]);
                break;
            case FormModes.Delete:
            default:
                onDelete(data[selected as number]);

        }
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            {
                                columns.map((key: string) => (
                                    <TableCell key={key}>{_.startCase(key)}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((row: T, index: number) => (
                                <TableRow
                                    key={JSON.stringify(row)}
                                    selected={selected === index}
                                    onClick={() => handleSelection(index)}>
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={selected === index}/>
                                            </TableCell>
                                    {
                                        columns.map((columnName: string, i: number) => (
                                            <TableCell align="left" key={`${JSON.stringify((row as any)[columnName])}${Math.random().toFixed(5)}`}>
                                                {columnTypes[i] === DataTypes.image ?
                                                    <Avatar alt="avatar" src={(row as any)[columnName]}/>
                                                    : (row as any)[columnName]}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.buttonGroup}>
                <Button
                    onClick={() => handleSelectionAction(FormModes.Add)}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<PersonAdd/>}>
                    Add
                </Button>
                <Button
                    onClick={()=> handleSelectionAction(FormModes.Edit)}
                    disabled={selected === null}
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<Edit/>}>
                    Edit
                </Button>
                <Button
                    onClick={()=> handleSelectionAction(FormModes.Delete)}
                    disabled={selected === null}
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
