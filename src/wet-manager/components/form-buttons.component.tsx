import React from 'react';
import {Button} from "@material-ui/core";
import classes from './form-buttons.module.scss';

interface FormButtonsProps {
    disabled: boolean;
    onRestore: any;
    isCreateForm: boolean;
}

function FormButtons({ disabled, onRestore, isCreateForm }: FormButtonsProps) {
    return (
        <div className={classes.buttonGroup}>
            <Button
                onClick={onRestore}
                disabled={disabled}
                className={classes.submitButton}
                variant="contained"
                color="secondary">
                {isCreateForm ? 'Reset' : 'Restore'}
            </Button>
            <Button
                disabled={disabled}
                className={classes.submitButton}
                type="submit"
                variant="contained"
                color="primary">
                {isCreateForm ? 'Create' : 'Save Changes'}
            </Button>
        </div>
    );
}

export default FormButtons;
