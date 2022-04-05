import React from "react";
import {
    addTaskThunkCreator,
    getTasksThunkCreator,
    inputTask,
    markAsCompletedThunkCreator,
    deleteTaskThunkCreator
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
    { inputTask, deleteTaskThunkCreator, getTasksThunkCreator, addTaskThunkCreator,
                    markAsCompletedThunkCreator })(TasksBoardContainer);