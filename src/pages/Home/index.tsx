import { useState} from 'react';
import axios from 'axios';
import config from '../../services/config.json';
import { Theme } from '../../components/Theme';
import { Searchbar } from '../../components/Searchbar';
import { InitialPage } from '../../components/InitialPage';
import { Loading } from '../../components/Loading';
import { Card } from '../../components/Cards';
import { ErrorPage } from '../../components/ErrorPage';

export const Home = () => {

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function searchByTitle (title: string) {
        setLoading(true);
        axios.get(config.API_URL + `s=${title}&apikey=${config.API_KEY}`)
        .then((data) => { 
            if(data.data.Response !== 'False'){
                setResults(data.data.Search);
                setError(null);
            } else {
                setError(data.data.Error);
            };
        }).catch(({message}) => {setError(message)})
        .finally(()=>setLoading(false));          
    }


    return (
        <Theme>
            <Searchbar handleSearch={searchByTitle}/>
            {
                results.length === 0 && error === null? 
                    <InitialPage/>
                :
                    <>
                        {
                            loading ?
                                <Loading/>
                            :
                            <>
                                {
                                    error !== null ?
                                        <ErrorPage message={error}/>
                                    :
                                     <Card data={results}/>
                                }
                            </> 
                        }
                    </>
            }
        </Theme>
    )
}