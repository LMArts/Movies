import * as C from './styles';
import {useNavigate} from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineHeart } from 'react-icons/ai';

interface Data{
    Poster: string, Title: string, Year: string, imdbID: string,
}

type Props = {
    data: Data[];
}

export const Card = ({data}: Props) => {

    const navigate = useNavigate();

    const handleNavigation = (id: string) => {
        navigate(`/details/${id}`, {state: {id: id}});
        return
    }

    return (
        <C.Container>
            {data.map((item, index)=>(
                <C.Row key={index} onClick={()=> handleNavigation(item.imdbID)}>
                    <C.Image src={item.Poster} alt={item.Title}/>
                    <C.Overlay>
                        <C.Content>
                            <C.Icon>
                                <IconContext.Provider value={{ color: "#7B8C98", size:'1.5em'}}>
                                    <AiOutlineHeart />
                                </IconContext.Provider>
                            </C.Icon>
                            <C.Text>
                                <C.Title>{item.Title}</C.Title>
                                <C.Year>{item.Year}</C.Year>
                            </C.Text>
                        </C.Content>
                    </C.Overlay>
                </C.Row>
            ))}
        </C.Container>
    );
}