import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    const { id, title, director, imagePath, abstract } = props.data;

    return (
        <div>
            <img src={imagePath} alt={title} />
            <h3>{title}</h3>
            <p>Director: <strong>{director}</strong> </p>
            <p>{abstract}</p>
            <Link to={`/movies/${id}`}>Info Film</Link>
        </div>
    );
}