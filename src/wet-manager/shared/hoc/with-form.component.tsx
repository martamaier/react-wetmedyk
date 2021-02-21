import React, {ComponentType, FormEvent, useCallback, useEffect, useState} from 'react';
import {Widget, WIDGET_TYPE} from "../../../models/widget.interface";
import {Card, CardContent} from "@material-ui/core";
import styles from "../../forms/form.module.scss";
import TextWidget from "../../../shared/widgets/text-widget.component";
import FormButtons from "../form-buttons.component";
import * as _ from "lodash";
import {BaseForm, FormInterface, FormState} from "../../models/form.interface";
import Dropdown, {STYLING_TYPES} from "../../../shared/widgets/dropdown.component";
import CheckboxWidget from "../../../shared/widgets/checkbox-widget";

function withForm<T extends BaseForm<T>>(WrappedComponent: ComponentType<T>, {
    formConfig,
    buildItem
}: FormInterface<T>) {
    return (props: T) => {
        const {data, onSubmit, userName} = props;
        const [fields, setFields] = useState<string[]>([]);

        const getInitialState = useCallback((initialState: FormState, values: T | null) => {
            if (!values) {
                return initialState;
            }
            return Object.entries(values || {}).reduce((prev: FormState, [key, value]) => {
                if (fields.includes(key)) {
                    prev[key] = {
                        ...initialState[key],
                        value,
                        values: initialState[key].widgetType === WIDGET_TYPE.checkbox ? initialState[key].values : null,
                    }
                }

                return prev;
            }, {});
        }, [fields]);

        const [formValues, setFormValues] = useState<{ [key: string]: Widget }>(getInitialState(formConfig, data));
        const isCreateForm = !data;

        const handleChange = (event: FormEvent<HTMLFormElement>, name: string) => {
            updateForm(name, String(event.currentTarget.value), formValues);
        }

        const updateForm = (name: string, value: string, form: { [key: string]: Widget }) => {
            setFormValues({
                ...form,
                [name]: {
                    ...form[name],
                    value,
                }
            });
        }

        const restoreFormValues = () => {
            setFormValues(getInitialState(formConfig, data));
        }

        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const newItem = buildItem(data, formValues, userName);
            onSubmit(newItem);
        }

        useEffect(() => {
            setFormValues(getInitialState(formConfig, data));
        }, [data, getInitialState]);

        useEffect(() => {
            setFields(Object.keys(formConfig));
        }, []);

        const getWidgetType = (formElement: Widget) => {
            const {name, items, value, widgetType} = formElement;
            switch (widgetType) {
                case WIDGET_TYPE.checkbox:
                    return <CheckboxWidget
                        key={name}
                        items={props.items ||items || []}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        multiline={false}/>
                case WIDGET_TYPE.dropdown:
                    return <Dropdown
                        label={name}
                        key={name}
                        items={items || []}
                        value={value}
                        styling={STYLING_TYPES.Default}
                        onChange={handleChange}/>
                default:
                    return <TextWidget
                        key={name}
                        {...formElement}
                        onChange={handleChange}/>
            }
        }

        return (
            <Card>
                <CardContent>
                    <WrappedComponent {...props} />
                    <form key={formValues.toString()} className={styles.form} onSubmit={handleSubmit}>
                        {
                            Object.values(formValues)
                                .map((formElement: Widget) => getWidgetType(formElement))
                        }
                        <FormButtons
                            isCreateForm={isCreateForm}
                            onRestore={restoreFormValues}
                            disabled={_.isEqual(getInitialState(formConfig, data), formValues)}/>
                    </form>
                </CardContent>
            </Card>
        );
    }
}

export default withForm;
