import {API} from "../API/api";

const GET_TASKS = 'GET_TASKS';
const INPUT_TASK = 'INPUT_TASK';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED';

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
                inputText: '',
                tasksList: [...state.tasksList]
            }
        case INPUT_TASK:
            return {
                ...state,
                inputText: action.inputText
            }
        case DELETE_TASK:
            return state;
        case MARK_TASK_AS_COMPLETED:
            return {
               ...state,
               tasksList: state.tasksList.map( task => {
                   if (task.id === action.taskId) {
                       return { ...task, completed: 1 }
                   }
                   return task;
               } )
            }
        default:
            return state;
    }
}

export const getTasks = (tasks) => ({ type: GET_TASKS, tasks })
export const addTask = () => ({ type: ADD_TASK })
export const inputTask = (text) => ({ type: INPUT_TASK, inputText: text })
export const deleteTask = (taskId) => ({ type: DELETE_TASK, taskId: taskId })
export const markAsCompleted = (taskId) => ({ type: MARK_TASK_AS_COMPLETED, taskId: taskId })

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