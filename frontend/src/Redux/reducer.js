import {API} from "../API/api";

const GET_TASKS = 'GET_TASKS';
const INPUT_TASK = 'INPUT_TASK';
const ADD_TASK = 'ADD_TASK';

let initialState = {
    tasksList: [],
    inputText: ''
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasksList: [...action.tasks]
            }
        case ADD_TASK:
            return {
                ...state,
                inputText: ''
            }
        case INPUT_TASK:
            return {
                ...state,
                inputText: action.inputText
            }
        default:
            return state;
    }
}

export const getTasks = (tasks) => ({ type: GET_TASKS, tasks })
export const addTask = () => ({ type: ADD_TASK })
export const inputTask = (text) => ({ type: INPUT_TASK, inputText: text })

export const getTasksThunkCreator = () => (dispatch) => {
    API.getTasks()
        .then (response => {
            if (response.status === 200) {
                dispatch(getTasks(response.data));
            }
        })
}

export const addTaskThunkCreator = (name) => (dispatch) => {
    let data = { name }
    API.addTask(data)
        .then (response => {
            if (response.status === 200) {
                dispatch(addTask());
                dispatch(getTasksThunkCreator());
            }
        })
}

export const markAsCompletedThunkCreator = (id) => (dispatch) => {
    API.markAsCompleted(id)
        .then(response => {
            if (response.status === 200) {
                dispatch(getTasksThunkCreator());
            }
        })
}

export const deleteTaskThunkCreator = (id) => (dispatch) => {
    API.deleteTask(id)
        .then(response => {
            if (response.status === 200) {
                dispatch(getTasksThunkCreator());
            }
        })
}