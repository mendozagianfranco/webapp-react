import StarRating from './StarRating';

export default function ReviewCard(props) {

    const { text, vote, name } = props.data;
    return (
        <div className='review-card'>
            <p className='review-card-text'>{text}</p>
            <p><strong>Vote</strong>: <StarRating vote={vote} /></p>
            <p className='review-card-author'>By {name}</p>
        </div>
    );
}