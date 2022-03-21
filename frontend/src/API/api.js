import * as axios from 'axios';

const baseURL = 'https://todoapi/';
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "text/plain"
    }
});

const getTasks = () => {
    return instance.get('tasks');
}

const addTask = (data) => {
    return instance.post('tasks', data);
}

export const API = {
    getTasks,
    addTask
}