import React from "react";
import {Post} from "./post.interface";

export interface ModalData {
    toggleModal: Function;
    displayModal: boolean;
    children?: React.ReactNode;
    data?: ModalItem;
}

export interface ModalItem {
    heading: string;
    subHeading: string;
    description: string;
    image?: string;
}

export function mapPostToModalItem(post: Post): ModalItem {
    return {
        heading: post.title,
        subHeading: post.date,
        description: post.content,
    }
}

