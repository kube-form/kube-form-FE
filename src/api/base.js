import axios from 'axios';

const API = axios.create({
    baseURL: '/api/v1',
});

export default API;
