import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const endpoint = `http://127.0.01:3000/api/movies/${id}`;

    function getMovie() {
        axios.get(endpoint)
            .then(res => {
                setMovie(res.data);
            });
    }

    useEffect(getMovie, []);

    return (
        <div className='container container-movie-detail'>
            <h1>{movie.title}</h1>
            <img src={movie.image} alt="" />
            <p>{movie.abstract}</p>
            <div className='container-reviews'>
                {movie.reviews?.length ? movie.reviews.map(review => (
                    <div key={review.id}>
                        {review.name}
                    </div>
                )) : <div>Nessuna Recensione</div>}
            </div>
        </div>
    );
}