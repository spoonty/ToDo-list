import React from "react";
import { Container } from "react-bootstrap";
import TaskItem from './TaskItem';
import SearchLine from "./SearchLine";

const TasksBoard = (props) => {
    let taskItems = props.data.tasksList.map((value) => <TaskItem id={value.id}
        name={value.name} completed={value.completed}
        markAsCompleted={props.markAsCompleted}
        deleteTask={props.deleteTask} />)

    return (
        <Container>
            <SearchLine inputText={props.inputText}
                        inputTask={props.inputTask}
                        addTask={props.addTask} />

            {taskItems}
        </Container>
    );
}

export default TasksBoard;