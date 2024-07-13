import axios from "axios";
import Cookies from 'js-cookie';

export const api = axios.create({
    baseURL: "https://bitwealth-backend.vercel.app/api/v1",
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const accessToken = Cookies.get('accessTokenBitWealth');
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => Promise.reject(error)
)
