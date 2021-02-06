import axios, {AxiosRequestConfig} from 'axios';
import {CURRENT_ENV} from "../environment";
import {AuthToken} from "../models/auth-token.interface";
import * as _ from 'lodash';

const axiosInstance = axios.create({
    baseURL: CURRENT_ENV,
    // timeout: 10000,
    params: {}
});

axiosInstance.interceptors.request.use((req: AxiosRequestConfig) => {
    const authData: AuthToken = JSON.parse(sessionStorage.getItem('user') as string);
    if (!_.isEmpty(authData) && !!authData.token) {
        return {
            ...req,
            headers: {
                ...req.headers,
                'Authorization': `Bearer ${authData.token}`,
            },
        };
    }
    return req;
})

export default axiosInstance;
