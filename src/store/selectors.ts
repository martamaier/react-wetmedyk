import {createSelector} from "reselect";
import {getPostError} from "./posts-store/selectors";
import {getEmployeeError} from "./employees-store/selectors";
import {getLocationError} from "./locations-store/selectors";
import {getFileError} from "./files-store/selectors";
import {getUserError} from "./users-store/selectors";
import {getServiceError} from "./services-store/selectors";

export const getErrors = createSelector(
    getPostError,
    getEmployeeError,
    getLocationError,
    getFileError,
    getUserError,
    getServiceError,
    (post, employee, location, file, user, service) =>
        [post, employee, location, file, user, service].filter(Boolean)
);
