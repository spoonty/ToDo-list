import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TaskItem from './TaskItem';

const TasksBoard = (props) => {
    let newTaskName = React.createRef();

    const inputTaskName = () => {
        let text = newTaskName.current.value;
        props.inputTask(text);
    }

    const addTask = () => {
        props.addTask();
    }

    let taskItems = props.data.tasksList.map((value) => <TaskItem id={value.id}
        name={value.name} completed={value.completed}
        markAsCompleted={props.markAsCompleted} />)

    return (
        <Container>
            <InputGroup className="mt-5 mb-5">
                <FormControl
                    placeholder="Input task name"
                    aria-label="Input task name"
                    ref={newTaskName}
                    onChange={inputTaskName}
                    value={props.data.inputText}
                />
                <Button variant="outline-secondary" onClick={addTask}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </InputGroup>

            {taskItems}
        </Container>
    );
}

export default TasksBoard;