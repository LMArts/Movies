import { useState } from 'react';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from 'react-icons/ai';
import * as C from './styles';

type Props = {
    handleSearch: (title: string) => void;
}

export const Searchbar = ({handleSearch}: Props) =>{
    
    const [title, setTitle] = useState('');

    const search = () => {
        handleSearch(title);
    }

    return(
        <C.Container>
            <C.Form>
                <C.Input placeholder='Search movies and series...' type='text' value={title} onChange={e => setTitle(e.target.value)}/>
            </C.Form>
            <C.ButtonDiv>
                <C.Button onClick={search} >
                    <IconContext.Provider value={{ color: "#7B8C98", size:'1.5em'}}>
                        <AiOutlineSearch />
                    </IconContext.Provider>
                </C.Button>
            </C.ButtonDiv>
        </C.Container>
    )
}