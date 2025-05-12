export default function MovieCard({ image, title }) {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse harum rem facilis incidunt nemo deserunt distinctio laboriosam consequuntur nesciunt, eligendi sed omnis corporis, ea quae in dolor labore quidem sit!</p>
            <button>Info Film</button>
        </div>
    );
}