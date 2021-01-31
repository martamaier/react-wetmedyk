import React, {ChangeEvent} from 'react';
import {TextField} from "@material-ui/core";
import styles from "../../wet-manager/components/Form.module.scss";
import {Widget} from "../../models/Widget.model";

function FileWidget(
    {onChange, name, multiline}: Widget & { onChange: Function },
) {
    return (
        <TextField
            onChange={(event: ChangeEvent) => onChange(event, name)}
            className={styles.formItem}
            multiline={multiline}
            id={name}
            type="file"
            name={name}
            variant="outlined"/>
    );
}

export default FileWidget;

