import { Theme } from '../../components/Theme';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../services/config.json';
import { InfoDetail } from '../../components/InfoDetail';
import { ErrorPage } from '../../components/ErrorPage';
import { Loading } from '../../components/Loading';

export const Details = () => {
    
    const {id} = useParams();
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function searchById (){
            setLoading(true);
            axios.get(config.API_URL + `i=${id}&apikey=${config.API_KEY}`)
            .then((data) => { 
                if(data.data.Response !== 'False'){
                    setResults(data.data);
                    setError(null);
                } else {
                    setError(data.data.Error);
                };
            }).catch(({message}) => {setError(message)})
            .finally(()=>setLoading(false));
        }
        searchById();
    },[id]);

    return (
        <Theme>
            {
                loading ?
                    <Loading/>
                :
                <>
                    {
                        error !== null ?
                            <ErrorPage message={error}/>
                        :
                            <InfoDetail data={results}/>
                    }
                </> 
            }
        </Theme>
    )
}