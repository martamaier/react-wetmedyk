import {CURRENT_ENV} from "../../environment";

export const getFilePath = (image: string) => `${CURRENT_ENV}/images/${image}`;

