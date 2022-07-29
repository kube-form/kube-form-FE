import axios from 'axios';

const API = axios.create({
    withCredentials: true,
    baseURL: '/api/v1',
});

export default API;
