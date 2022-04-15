import React from "react";
import { Container } from "react-bootstrap";
import TaskItem from './TaskItem';
import InputLine from "./InputLine";

const TasksBoard = (props) => {
    let taskItems = props.data.tasksList.map((value) => <TaskItem
        id={value.id}
        name={value.name}
        completed={value.completed}
        markAsCompletedThunkCreator={props.markAsCompletedThunkCreator}
        deleteTaskThunkCreator={props.deleteTaskThunkCreator} />)

    return (
        <Container className='mb-5'>
            <InputLine inputText={props.data.inputText}
                       inputTask={props.inputTask}
                       addTaskThunkCreator={props.addTaskThunkCreator} />

            {taskItems}
        </Container>
    );
}

export default TasksBoard;