import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function Home() {
    const [movies, setMovies] = useState([]);

    const endpoint = 'http://127.0.01:3000/api/movies';
    function fetchMovies() {
        axios.get(endpoint)
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(fetchMovies, []);

    return (
        <>
            <h1>Movies</h1>
            <h2>Best movies in the class142</h2>
            {movies.length ? movies.map(movie => (<MovieCard key={movie.id} image={movie.imagePath} title={movie.title} />)) : <div>Nessun Film Trovato</div>}
        </>
    );
}