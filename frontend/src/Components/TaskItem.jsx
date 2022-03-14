import { Card } from "react-bootstrap";

const TaskItem = (props) => {
    return (
        <Card className='mt-2 text-start'>
            <Card.Body>{props.name}</Card.Body>
        </Card>
    );
}

export default TaskItem;