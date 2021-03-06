import { Route } from "../models/route.interface";

export const routes: Route[] = [
    {
        path: 'services',
        displayName: 'usługi',
        active: false,
    },
    {
        path: 'contact',
        displayName: 'kontakt',
        active: false,
    },
    {
        path: 'employees',
        displayName: 'o nas',
        active: false,
    },
    {
        path: 'news',
        displayName: 'aktualności',
        active: false,
    }
];
