import * as C from './styles';
import { IconContext } from "react-icons";
import { BsArrowLeft, BsHeart } from 'react-icons/bs';
import ameba from '../../assets/img/ameba.png';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Data{
    data: any;
}

export const InfoDetail = ({data}: Data) =>{

    const navigate = useNavigate();
    const [actors, setActors] = useState([]);
    const [genre, setGenre] = useState([]);
    const [director, setDirector] = useState([]);
    const [imdb, setImdb] = useState('N/A');
    const [tomato, setTomato] = useState('N/A');

    const handleNavigation = () => {
        navigate('/');
    }

    useEffect(()=>{
        const handleData = () => {
            let castArray = data.Actors.split(',');
            let genreArray = data.Genre.split(',');
            let directorArray = data.Director.split(',');
            setActors(castArray);
            setGenre(genreArray);
            setDirector(directorArray);   
            if (data.Ratings !== undefined){
                if (data.Ratings[0] !== undefined){
                    setImdb(data.Ratings[0].Value);
                } 
                if (data.Ratings[1] !== undefined){
                    setTomato(data.Ratings[1].Value);
                }
            }
        }
        handleData();
    },[]);

    return(
        <C.Container>
                <C.FirstBlock>
                    <C.ArrowButton onClick={handleNavigation}>
                        <IconContext.Provider value={{ color: "#7B8C98", size:'1.5em'}}>
                            <BsArrowLeft />
                        </IconContext.Provider>
                    </C.ArrowButton>
                    <C.Time>
                        <C.TimeText>{data.Runtime}</C.TimeText><C.TimeText>•</C.TimeText>
                        <C.TimeText>{data.Year}</C.TimeText><C.TimeText>•</C.TimeText>
                        <C.TimeTextSpecial>{data.Rated}</C.TimeTextSpecial>
                    </C.Time>
                </C.FirstBlock>
                <C.SecondBlock>
                    <C.Info>
                        <C.Title>
                            <C.TextTitle>{data.Title}</C.TextTitle> 
                        </C.Title>
                        <C.Approbation>
                            <C.Imdb>
                                <C.ImdbIcon>IMDb</C.ImdbIcon>
                                <C.ImdbInfo>{imdb}</C.ImdbInfo>
                            </C.Imdb>
                            <C.Item>
                                <C.ItemImageDiv>
                                    <C.ItemImage src={ameba} alt='Approbation icon'/>
                                </C.ItemImageDiv>
                                <C.ItemText>{tomato}</C.ItemText>
                            </C.Item>
                            <C.FavoriteButton>
                                <C.IconDiv>
                                    <IconContext.Provider value={{ color: "#7B8C98", size:'1.5em'}}>
                                        <BsHeart />
                                    </IconContext.Provider>
                                </C.IconDiv>
                                <C.FavoriteText>Add to favorites</C.FavoriteText>
                            </C.FavoriteButton>
                        </C.Approbation>
                        <C.Plot>
                            <C.PlotTitle>Plot</C.PlotTitle>
                            <C.PlotText>{data.Plot}</C.PlotText>
                        </C.Plot>
                        <C.Details>
                            <C.DetailDiv>
                                <C.DetailTitle>Cast</C.DetailTitle>
                                {actors.map((item, index)=>(
                                    <C.DetailText key={index}>
                                        {item}
                                    </C.DetailText> 
                                ))}
                            </C.DetailDiv>
                            <C.DetailDiv>
                                <C.DetailTitle>Genre</C.DetailTitle>
                                {genre.map((item, index)=>(
                                    <C.DetailText key={index}>
                                        {item}
                                    </C.DetailText> 
                                ))}
                            </C.DetailDiv>
                            <C.DetailDiv>
                                <C.DetailTitle>Director</C.DetailTitle>
                                {director.map((item, index)=>(
                                    <C.DetailText key={index}>
                                        {item}
                                    </C.DetailText> 
                                ))}
                            </C.DetailDiv>
                        </C.Details>
                    </C.Info>
                    <C.PosterDiv>
                        <img style={{borderRadius: 8, width: '100%'}} src={data.Poster} alt={data.Title}/>
                    </C.PosterDiv>
                </C.SecondBlock>
            </C.Container>
    )
}