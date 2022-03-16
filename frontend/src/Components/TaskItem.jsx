import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TaskItem = (props) => {
    let markTaskAsCompleted = () => {
        props.markAsCompleted(props.id);
    }

    return (
        <Card className={props.completed === 1 ? 'mt-2 text-start list-group-item-success' : 'mt-2 text-start'}>
            <Card.Body>
                <Container>
                    <Row className='align-items-center'>
                        <Col sm={10}>
                            {props.name}
                        </Col>
                        <Col sm={2} className='text-end'>
                            <ButtonGroup>
                                {
                                    props.completed === 0
                                        ? <Button variant='outline-success' onClick={markTaskAsCompleted}><FontAwesomeIcon icon={faCheck} /></Button>
                                        : null
                                }
                                <Button variant='outline-danger'>
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