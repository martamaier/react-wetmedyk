import {POST_STATUS_TYPES} from "../wet-manager/models/post-status.types";

export interface Post {
    id: number;
    author: string;
    date: string;
    dateGmt: string;
    content: string;
    title: string;
    status: POST_STATUS_TYPES;
    name: string;
    modified: string;
    modifiedGmt: string;
    guid: string;
    type: string;
}
