import React, {ChangeEvent, useState} from 'react';
import {Card, CardContent} from "@material-ui/core";
import TextWidget from "../../shared/widgets/TextWidget";
import {Post} from "../../models/Post.model";
import {Widget} from "../../models/Widget.model";
import classes from './EmployeeForm.module.scss';
import FormButtons from "./FormButtons";
import * as _ from "lodash";

function PostForm({ post }: { post: Post }) {
    const { title, status, content } = post;
    const initialFormValues = {
        title: {
            name: 'title',
            value: post?.title || '',
            multiline: false,
        },
        status: {
            name: 'status',
            value: post?.status || 'open',
            multiline: false,
        },
        content: {
            name: 'content',
            value: post?.content || '',
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

    const restoreFormValues = () => console.log();

   return (
       <Card>
           <CardContent>
               <form className={classes.form}>
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
