import React from 'react';
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function ErrorMessage({ text }: { text: string }) {
    return (
        <Snackbar open={true} autoHideDuration={6000} onClose={() => {}}>
            <MuiAlert elevation={6} variant="filled" severity="error" >
                {text}
            </MuiAlert>
        </ Snackbar>
    );
}

export default ErrorMessage;

