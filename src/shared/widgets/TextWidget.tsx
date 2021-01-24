import React, {ChangeEvent} from "react";
import styles from "../../wet-manager/components/Form.module.scss";
import * as _ from "lodash";
import {TextField} from "@material-ui/core";
import {Widget} from "../../models/Widget.model";

function TextWidget(props: Widget & { onChange: Function }) {

    return(
        <TextField
            onChange={(event: ChangeEvent) => props.onChange(event, props.name)}
            className={styles.formItem}
            multiline={props.multiline}
            id={props.name}
            label={_.startCase(props.name)}
            variant="outlined"
            value={props.value}/>
    )
}

export default TextWidget;
