import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles, Theme} from "@material-ui/core";
import variables from './dropdown.module.scss';


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: variables.secondaryRed,
            fontSize: '2rem',
            outline: 'none',
            marginBottom: '3rem',
            marginLeft: '2rem',
        },
        formControl: {
            outline: 'none',
        },
        select: {
            fontSize: '2rem',
            color: variables.white,
            outline: 'none',
        },
        iconOutlined: {
            width: '3rem',
            height: '3rem',
            fill: variables.white,
        },
        size: {
            fontSize: '2rem',
        }
    }),
);
