import React from "react";
import {
    addTaskThunkCreator,
    deleteTask,
    getTasksThunkCreator,
    inputTask,
    markAsCompleted,
} from "../Redux/reducer";
import { connect } from "react-redux";
import TasksBoard from "./TasksBoard";

class TasksBoardContainer extends React.Component {
    componentDidMount() {
        this.props.getTasksThunkCreator();
    }

    render() {
        return <TasksBoard {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        data: state.toDo
    }
}

export default TasksBoardContainer = connect(mapStateToProps,
    { inputTask, markAsCompleted, deleteTask, getTasksThunkCreator, addTaskThunkCreator })(TasksBoardContainer);