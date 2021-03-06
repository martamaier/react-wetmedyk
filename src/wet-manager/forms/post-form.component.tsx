import React from 'react';
import {Post} from "../../models/post.interface";
import * as _ from "lodash";
import {getCurrentDate, getCurrentUTCDate} from "../utils/date-formats";
import Typography from "@material-ui/core/Typography";
import withForm from "../shared/hoc/with-form.component";
import {BaseForm, FormInterface, FormState} from "../models/form.interface";
import {POST_STATUS_TYPES} from "../models/post-status.types";
import {mapPostStatusesToDropdownItem} from "../../utils/dropdown-items-map";
import {WIDGET_TYPE} from "../../models/widget.interface";

const formConfig = {
    title: {
        name: 'title',
        value: '',
        multiline: false,
    },
    status: {
        name: 'status',
        value: '',
        multiline: false,
        select: true,
        items: Object.entries(POST_STATUS_TYPES).map(mapPostStatusesToDropdownItem),
        widgetType: WIDGET_TYPE.dropdown,
    },
    content: {
        name: 'content',
        value: '',
        multiline: true,
    },
};

const buildPost = (post: Post | null, form: FormState, userName: string): Partial<Post> => {
    const date = getCurrentDate();
    const dateGmt = getCurrentUTCDate();
    const postStarter: Partial<Post> = {
        date,
        dateGmt,
        type: 'post',
        guid: '',
    };
    const changedValues: Partial<Post> = {
        title: String(form.title.value),
        status: String(form.status.value) as POST_STATUS_TYPES,
        content: String(form.content.value),
        author: userName,
        modifiedGmt: dateGmt,
        modified: date,
        name: _.kebabCase(String(form.title.value)),
    };
    return _.merge({}, post ? post : postStarter, changedValues);
}

function PostForm({data}: BaseForm<Post>) {
    return (
        <Typography>{data ? 'Editing Post' : 'Creating Post'}</Typography>
    );
}

const options: FormInterface<Post> = {
    formConfig,
    buildItem: buildPost,
}

export default withForm(PostForm, options);
