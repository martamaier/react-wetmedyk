import React, {FormEvent, useEffect, useState} from 'react';
import {Card, CardContent} from "@material-ui/core";
import TextWidget from "../../shared/widgets/TextWidget";
import {Post} from "../../models/Post.model";
import {Widget} from "../../models/Widget.model";
import classes from './Form.module.scss';
import FormButtons from "./FormButtons";
import * as _ from "lodash";
import {getCurrentDate, getCurrentUTCDate} from "../utils/DateFormats";
import Dropdown, {STYLING_TYPES} from "../../shared/widgets/Dropdown";
import {POST_STATUS_TYPES} from "../models/PostStatusTypes";
import {mapPostStatusesToDropdownItem} from "../../utils/dropdown-items-map";

interface PostFormInterface {
    post: Post | null;
    userName: string;
    onSubmit: any;
}

function PostForm({ post, userName, onSubmit }: PostFormInterface) {
    const getInitialFormState = (post: Post | null): { [key: string]: Widget } => {
        const { title, status, content } = post || { title: '', status: 'open', content: '' };

        return {
            title: {
                name: 'title',
                value: title,
                multiline: false,
            },
            status: {
                name: 'status',
                value: status,
                multiline: false,
                select: true,
            },
            content: {
                name: 'content',
                value: content,
                multiline: true,
            },
        };
    }
    const [formValues, setFormValues] = useState<{ [key: string]: Widget }>(getInitialFormState(post));
    const isCreateForm = !_.get(post, 'title', false);

    const handleChange = (event: FormEvent<HTMLFormElement>, name: string) => {
        updateForm(name, event.currentTarget.value, formValues);
    }

    const handleDropdownChange = (event: React.ChangeEvent<{ value: unknown }>, name: string) => {
        updateForm(name, String(event.target.value), formValues);
    }

    const updateForm = (name: string, value: string, form: { [key: string]: Widget }) => {
        setFormValues({
            ...form,
            [name]: {
                ...form[name],
                value,
            }
        })
    }

    const restoreFormValues = () => {
        setFormValues(getInitialFormState(post));
    }

    const buildPost = (post: Post | null): Partial<Post> => {
        const date = getCurrentDate();
        const dateGmt = getCurrentUTCDate();
        const postStarter: Partial<Post> = {
            date,
            dateGmt,
            type: 'post',
            guid: '',
        };
        const changedValues: Partial<Post> = {
            title: formValues.title.value,
            status: formValues.status.value,
            content: formValues.content.value,
            author: userName,
            modifiedGmt: dateGmt,
            modified: date,
            name: _.kebabCase(formValues.title.value),
        };
        return _.merge({}, post ? post : postStarter, changedValues);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPost: Partial<Post> = buildPost(post);
        onSubmit(newPost);
    }

    useEffect(() => {
        setFormValues(getInitialFormState(post));
    }, [post]);

   return (
       <Card>
           <CardContent>
               <form className={classes.form} onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                   {
                       Object.values(formValues).map(({ name, value, multiline, select }: Widget) => (
                           select ? <Dropdown
                                   key={name}
                                   items={Object.entries(POST_STATUS_TYPES).map((type: string[]) => mapPostStatusesToDropdownItem(type))}
                                   onChange={(event: React.ChangeEvent<{ value: unknown }>) => handleDropdownChange(event, name)}
                                   value={value}
                                   label={name}
                                   styling={STYLING_TYPES.Default} /> :
                               <TextWidget
                                   key={name}
                                   name={name}
                                   value={value}
                                   multiline={multiline}
                                   onChange={handleChange} />
                       ))
                   }
                   <FormButtons
                       disabled={_.isEqual(getInitialFormState(post), formValues)}
                       onRestore={restoreFormValues}
                       isCreateForm={isCreateForm} />
               </form>
           </CardContent>
       </Card>
   );
}

export default PostForm;
