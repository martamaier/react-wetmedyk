import {Statuses} from "./ResponseStatuses";

export interface NewsletterResponse {
    message: string | null;
    status: Statuses | null;
}
