import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

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
        <>
            <div className='container container-movie-detail'>
                <img src={movie.image} alt="" />
                <div className='container-movie-info'>
                    <h1>{movie.title}</h1>
                    <p>Director: <strong>{movie.director}</strong></p>
                    <p>{movie.abstract}</p>
                </div>

            </div>
            <div className=' container container-reviews'>
                <div className='container-reviews-top'>
                    <h2>OUR comunity reviews</h2>
                    <div>Average: {movie.voto_medio}</div>
                </div>
                {movie.reviews?.length ? movie.reviews.map(review => (
                    <ReviewCard key={review.id} data={review} />
                )) : <div>Nessuna Recensione</div>}
            </div>
        </>
    );
}