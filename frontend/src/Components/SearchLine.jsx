import { InputGroup, Button, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SearchLine = () => {
    return (
        <InputGroup className="mt-5 mb-5">
            <FormControl
                placeholder="Input task name"
                aria-label="Input task name"
            />
            <Button variant="outline-secondary">
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </InputGroup>
    );
}

export default SearchLine;