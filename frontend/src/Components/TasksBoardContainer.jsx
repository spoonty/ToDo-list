import { addTaskActionCreator, inputTaskActionCreator, markTaskAsCompletedActionCreator } from "../Redux/reducer";
import { connect } from "react-redux";
import TasksBoard from "./TasksBoard";

let mapStateToProps = (state) => {
    return {
        data: state.toDo
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => {
            dispatch(addTaskActionCreator());
        },
        inputTask: (text) => {
            dispatch(inputTaskActionCreator(text));
        },
        markAsCompleted: (taskId) => {
            dispatch(markTaskAsCompletedActionCreator(taskId));
        }
    }
}

const InputLineContainer = connect(mapStateToProps, mapDispatchToProps)(TasksBoard);
export default InputLineContainer;