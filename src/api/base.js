import axios from 'axios';
import config from 'config';

const API = axios.create({
    // withCredentials: true,
    baseURL: `${config.API_URL}/api/v1`,
});

export default API;
