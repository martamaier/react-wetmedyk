import React, {ChangeEvent} from "react";
import styles from "../../wet-manager/forms/form.module.scss";
import * as _ from "lodash";
import {TextField} from "@material-ui/core";
import {Widget} from "../../models/widget.interface";

function TextWidget(
    { onChange, name, multiline, value }: Widget & { onChange: Function },
) {

    return(
        <TextField
            onChange={(event: ChangeEvent) => onChange(event, name)}
            className={styles.formItem}
            multiline={multiline}
            id={name}
            name={name}
            label={_.startCase(name)}
            variant="outlined"
            value={value}/>
    )
}

export default TextWidget;
