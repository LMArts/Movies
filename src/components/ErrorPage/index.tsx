import * as C from './styles';
import { FaRegSadCry } from 'react-icons/fa';
import { IconContext } from "react-icons";

type Props = {
    message: string
}

export const ErrorPage = ({message}: Props) => {
    return(
        <C.Container>
            <C.Content>
                <IconContext.Provider value={{ color: "#7B8C98", size:'8em'}}>
                    <FaRegSadCry />
                </IconContext.Provider>
                <C.Text>Sorry, {message}</C.Text>
            </C.Content>
        </C.Container>
    );
}