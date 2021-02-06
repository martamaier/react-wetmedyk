import {Statuses} from "./response-statuses.types";

export interface NewsletterResponse {
    message: string | null;
    status: Statuses | null;
}
