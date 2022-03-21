import React from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const SearchLine = (props) => {
    let newTaskName = React.createRef();

    const inputTaskName = () => {
        let text = newTaskName.current.value;
        props.inputTask(text);
    }

    const addTask = () => {
        props.addTask();
    }

    return(
        <InputGroup className="mt-5 mb-5">
            <FormControl
                placeholder="Input task name"
                aria-label="Input task name"
                ref={newTaskName}
                onChange={inputTaskName}
                value={props.inputText}
            />
            <Button variant="outline-secondary" onClick={addTask}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </InputGroup>
    );
}

export default SearchLine;