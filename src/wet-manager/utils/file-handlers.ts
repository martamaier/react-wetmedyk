import {ENVIRONMENT} from "../../environment";

export const getFilePath = (image: string) => `${ENVIRONMENT.s3}/${image}`;

