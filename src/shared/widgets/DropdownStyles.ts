import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 140,
            marginLeft: '3.5rem',
            marginBottom: '5rem',
            outline: 'none',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        label: {
            fontSize: '2rem',
        },
        select: {
            fontSize: '2rem',
        },
        noBorder: {
            border: 'none',
        }
    }),
);
