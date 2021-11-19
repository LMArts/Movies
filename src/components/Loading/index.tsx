import * as C from './styles';
import { Spinner } from 'react-bootstrap';

export const Loading = () =>{
    return(
        <C.Container>
            <C.Content>
                <Spinner animation="grow" role="status" variant="warning">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </C.Content>
        </C.Container>
    )
}