import axios from 'axios';
import config from 'config';

const API = axios.create({
    withCredentials: true,
    baseURL: `/api/v1`,
});

export default API;
