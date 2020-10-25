import axios, {AxiosRequestConfig} from 'axios';
import {CURRENT_ENV} from "../environment";

const axiosInstance = axios.create({
    baseURL: CURRENT_ENV,
    timeout: 10000,
    params: {}
});

axiosInstance.interceptors.request.use((req: AxiosRequestConfig) => {
    console.log(`${req.method} ${req.url} ${req.headers}`);
    return {
        ...req,
        headers: { ...req.headers, 'Authorization': `Bearer ${372673647372648732}` }
    }
})

export default axiosInstance;
