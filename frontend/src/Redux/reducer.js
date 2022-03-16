const INPUT_TASK = 'INPUT_TASK';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED';

let initialState = {
    tasksList: [
        { id: 1, name: 'Вымыть посуду', completed: 0 },
        { id: 2, name: 'Покормить кота', completed: 0 },
        { id: 3, name: 'Прочитать книгу', completed: 0 }
    ],
    inputText: ''
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                inputText: '',
                tasksList: [...state.tasksList, { id: 4, name: state.inputText, completed: 0 }]
            }
        case INPUT_TASK:
            return {
                ...state,
                inputText: action.inputText
            }
        case DELETE_TASK:
            return {

            }
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

export const addTaskActionCreator = () => ({ type: ADD_TASK })
export const inputTaskActionCreator = (text) => ({ type: INPUT_TASK, inputText: text })
export const deleteTaskActionCreator = () => ({ type: DELETE_TASK })
export const markTaskAsCompletedActionCreator = (taskId) => ({ type: MARK_TASK_AS_COMPLETED, taskId: taskId })