import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const { setIsLoading } = useContext(GlobalContext);

    const endpoint = 'http://127.0.01:3000/api/movies';
    function fetchMovies() {
        setIsLoading(true);

        axios.get(endpoint, { params: { search } })
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => console.log(err))
            .finally(() => { setIsLoading(false); });
    }

    function searchMovies(e) {
        e.preventDefault();
        fetchMovies();

    }

    useEffect(fetchMovies, []);

    return (
        <div className='container'>
            <h1>Movies</h1>
            <div className='subtitle'>
                <h2>Best movies in the class142</h2>
                <form onSubmit={searchMovies}>
                    <label className='label-search'>Cerca</label>
                    <input className='form-control' value={search} onChange={(e) => { setSearch(e.target.value); }} type="text" placeholder='Cerca' />
                    <button type='submit' className='btn-info'>Cerca</button>
                </form>
            </div>
            <div className='container-movies'>
                {movies.length ? movies.map(movie => (<MovieCard key={movie.id} data={movie} />)) : <div>Nessun Film Trovato</div>}
            </div>
        </div>
    );
}