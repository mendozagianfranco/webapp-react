import axios from 'axios';
import { useEffect, useState } from 'react';

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
            {movies.length ? movies.map(movie => (
                <div key={movie.id}>
                    <img src={movie.imagePath} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum rem facilis incidunt nemo deserunt distinctio laboriosam consequuntur nesciunt, eligendi sed omnis corporis, ea quae in dolor labore quidem sit!</p>
                    <button>Info Film</button>
                </div>
            )) : <div>Nessun Film Trovato</div>}
        </>
    );
}