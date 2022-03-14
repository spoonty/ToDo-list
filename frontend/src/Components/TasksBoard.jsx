import React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import TaskItem from "./TaskItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TasksBoard = (props) => {
    let newTaskName = React.createRef();

    const inputTaskName = () => {
        let text = newTaskName.current.value;
        props.inputTask(text);
    }

    const addTask = () => {
        props.addTask();
    }

    let taskItems = props.data.tasksList.map((value) => <TaskItem name={value.name} />)

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