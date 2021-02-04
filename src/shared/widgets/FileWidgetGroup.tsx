import React, {ChangeEvent, ReactNode, useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {Widget} from "../../models/Widget.model";
import TextWidget from "./TextWidget";
import FileWidget from "./FileWidget";

interface RadioElement {
    type: FILE_TYPES;
    label: string;
}

enum FILE_TYPES {
    file = 'file',
    text = 'text',
    choose = 'choose',
}

function FileWidgetGroup(
    {onChange, name, multiline, value}: Widget & { onChange: Function }
) {
    const [currentSelection, setCurrentSelection] = useState<FILE_TYPES | undefined>(value ? FILE_TYPES.text : undefined);
    const radioElements: RadioElement[] = [
        {
            type: FILE_TYPES.file,
            label: 'Select file from your computer',
        },
        {
            type: FILE_TYPES.text,
            label: 'Paste image url',
        },
        {
            type: FILE_TYPES.choose,
            label: 'Select from application server',
        },
    ];

    const handleSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentSelection(event.currentTarget.value as FILE_TYPES);
    }

    const getWidget = (type: FILE_TYPES): ReactNode => {
        switch (type) {
            case FILE_TYPES.file:
                return <FileWidget
                    name={name}
                    value={value}
                    multiline={multiline}
                    onChange={onChange} />
            case FILE_TYPES.choose:
                return <p>Item currently not supported</p>
            case FILE_TYPES.text:
            default:
                return <TextWidget
                    name={name}
                    value={value}
                    multiline={multiline}
                    onChange={onChange} />
        }
    }

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Photo</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={currentSelection}
                    onChange={handleSelectionChange}>
                    {
                        radioElements.map(({ label, type }: RadioElement) => (
                            <FormControlLabel
                                key={type}
                                value={type}
                                control={<Radio />}
                                label={label} />
                        ))
                    }
                </RadioGroup>
            </FormControl>
            {
                currentSelection && getWidget(currentSelection)
            }
        </>
    );
}

export default FileWidgetGroup;
