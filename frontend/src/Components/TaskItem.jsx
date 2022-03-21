import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TaskItem = (props) => {
    let markTaskAsCompleted = () => {
        props.markAsCompleted(props.id);
    }

    let deleteTask = () => {
        props.deleteTask(props.id);
    }

    return (
        <Card className={props.completed === 1 ? 'mt-2 text-start list-group-item-success' : 'mt-2 text-start'}>
            <Card.Body>
                <Container>
                    <Row className='align-items-center'>
                        <Col sm={9} className='text-start'>
                            {props.name}
                        </Col>
                        <Col sm={3} className='text-end'>
                            <ButtonGroup>
                                {
                                    props.completed === 0
                                        ? <Button variant='outline-success' onClick={markTaskAsCompleted}><FontAwesomeIcon icon={faCheck} /></Button>
                                        : null
                                }
                                <Button variant='outline-danger' onClick={deleteTask}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default TaskItem;