import React from "react";
import {Employee} from "./employee.interface";
import {Post} from "./post.interface";
import {PrimaryServiceCard} from "./primary-service-card.interface";

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

export function mapEmployeeToModalItem(employee: Employee): ModalItem {
    return {
        heading:`${employee.firstName} ${employee.lastName}`,
        subHeading: employee.title,
        description: employee.description,
        image: employee.photo,
    }
}

export function mapPostToModalItem(post: Post): ModalItem {
    return {
        heading: post.title,
        subHeading: post.date,
        description: post.content,
    }
}

export function mapPrimaryServiceToModalItem(primaryService: PrimaryServiceCard): ModalItem {
    return {
        heading: primaryService.title,
        subHeading: primaryService.description,
        description: primaryService.details.join(' '),
    }
}