import dayjs from "dayjs";

export const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const getCurrentDate = (): string => {
    return dayjs(new Date(Date.now()))
        .format(DATE_FORMAT);
}

export const getCurrentUTCDate = (): string => {
    return dayjs(new Date(Date.now()), { utc: true })
        .format(DATE_FORMAT);
}
