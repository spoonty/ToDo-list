import React from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TaskItem = (props) => {
    return (
        <Card className='mt-2 text-start'>
            <Card.Body>
                <Container>
                    <Row className='align-items-center'>
                        <Col sm={10}>
                            { props.name }
                        </Col>
                        <Col sm={2}>
                            <ButtonGroup>
                                <Button variant='outline-success'>
                                    <FontAwesomeIcon icon={faCheck} />
                                </Button><Button variant='outline-danger'>
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