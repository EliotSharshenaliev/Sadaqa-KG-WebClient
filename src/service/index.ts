import axios from 'axios';

export const Instance = axios.create({
    baseURL: "/api/v1",
    withCredentials: true
})

