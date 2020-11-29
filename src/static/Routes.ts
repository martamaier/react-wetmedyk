import { Route } from "../models/Route.model";

export const routes: Route[] = [
    {
        path: 'services',
        displayName: 'usługi',
        active: false,
    },
    {
        path: 'employees',
        displayName: 'o nas',
        active: false,
    },
    {
        path: 'contact',
        displayName: 'kontakt',
        active: false,
    }
];
