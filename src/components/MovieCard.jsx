import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    const { id, title, imagePath, abstract } = props.data;

    return (
        <div>
            <img src={imagePath} alt={title} />
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum rem facilis incidunt nemo deserunt distinctio laboriosam consequuntur nesciunt, eligendi sed omnis corporis, ea quae in dolor labore quidem sit!</p>
            <Link to={`/movies/${id}`}>Info Film</Link>
        </div>
    );
}