import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Card, CardContent} from "@material-ui/core";
import TextWidget from "../../shared/widgets/TextWidget";
import {Post} from "../../models/Post.model";
import {Widget} from "../../models/Widget.model";
import classes from './EmployeeForm.module.scss';
import FormButtons from "./FormButtons";
import * as _ from "lodash";
import {getCurrentDate, getCurrentUTCDate} from "../utils/DateFormats";

function PostForm({ post, userName, onSubmit }: { post: Post, userName: string, onSubmit: any }) {
    const { title, status, content } = post;
    const initialFormValues = {
        title: {
            name: 'title',
            value: title || '',
            multiline: false,
        },
        status: {
            name: 'status',
            value: status || 'open',
            multiline: false,
        },
        content: {
            name: 'content',
            value: content || '',
            multiline: true,
        },
    };

    const isCreateForm = !_.get(post, 'title', false);
    const [formValues, setFormValues] = useState<{ [key: string]: Widget }>({ ...initialFormValues });
    const handleChange = (event: ChangeEvent, name: string) => {
        setFormValues({
            ...formValues,
            [name]: {
                ...formValues[name],
                value: (event.target as any).value,
            }
        });
    }

    const restoreFormValues = () => {
        setFormValues(initialFormValues);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPost: Partial<Post> = {
            ...post,
            title: formValues.title.value,
            status: formValues.status.value,
            content: formValues.content.value,
            author: userName,
            modifiedGmt: getCurrentUTCDate(),
            modified: getCurrentDate(),
            name: _.kebabCase(formValues.title.value),
        }
        onSubmit(newPost)
    }

   return (
       <Card>
           <CardContent>
               <form className={classes.form} onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event)}>
                   {
                       Object.values(formValues).map(({ name, value, multiline }: Widget) => (
                           <TextWidget
                               key={name}
                               name={name}
                               value={value}
                               multiline={multiline}
                               onChange={handleChange} />
                       ))
                   }
                   <FormButtons
                       disabled={_.isEqual(initialFormValues, formValues)}
                       onRestore={restoreFormValues}
                       isCreateForm={isCreateForm} />
               </form>
           </CardContent>
       </Card>
   );
}

export default PostForm;
