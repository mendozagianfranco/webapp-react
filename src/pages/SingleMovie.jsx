import { useParams } from 'react-router-dom';

export default function SingleMovie() {

    const { id } = useParams();
    return (
        <div className='container'>
            <h1>Movie con id:{id}</h1>
        </div>
    );
}