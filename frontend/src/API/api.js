import * as axios from 'axios';

const baseURL = 'https://todoapi/';
const instance = axios.create({baseURL});

const getTasks = () => {
    return instance.get('tasks');
}

export const API = {
    getTasks
}