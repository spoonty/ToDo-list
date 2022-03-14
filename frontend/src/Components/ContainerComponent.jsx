import { Container } from "react-bootstrap";
import SearchLine from "./SearchLine";
import TaskItem from "./TaskItem";

let store = {
    tasks: [{ id: 1, name: 'Вымыть посуду', completed: 0 },
    { id: 2, name: 'Покормить кота', completed: 0 },
    { id: 3, name: 'Прочитать книгу', completed: 0 }]
}

const ContainerComponent = () => {
    let taskItems = store.tasks.map((value) => <TaskItem name={value.name} />)
    return (
        <Container>
            <SearchLine />
            {taskItems}
        </Container>
    );
}

export default ContainerComponent;