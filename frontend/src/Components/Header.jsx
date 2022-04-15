import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="warning">
            <Container fluid>
                <Navbar.Brand className='text-light fw-bold'>ToDo list</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;