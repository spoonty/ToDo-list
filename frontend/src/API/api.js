import * as axios from 'axios';

const baseURL = 'https://todoapi/';
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "text/plain"
    },
    'X-Requested-With': 'XMLHttpRequest'
});

const getTasks = () => {
    return instance.get('tasks');
}

const addTask = (data) => {
    return instance.post('tasks', data);
}

const markAsCompleted = (id) => {
    return instance.post(`tasks/${id}/completed`);
}

const deleteTask = (id) => {
    return instance.delete(`tasks/${id}`);
}

export const API = {
    getTasks,
    addTask,
    markAsCompleted,
    deleteTask
}