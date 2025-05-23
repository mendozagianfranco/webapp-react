import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    const { id, title, director, imagePath, abstract, voto_medio } = props.data;

    return (
        <div className='card-movie'>
            <img src={imagePath} alt={title} />
            <h3>{title}</h3>
            <p>Media Recensione: {voto_medio}</p>
            <p>Director: <strong>{director}</strong> </p>
            <p>{abstract}</p>
            <Link className='btn-info' to={`/movies/${id}`}>Info Film</Link>
        </div>
    );
}