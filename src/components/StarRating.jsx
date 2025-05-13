export default function StarRating({ vote }) {
    const maxValue = 5;
    // return [...Array(maxValue)].map((_, index) => index < vote ? 'SP' : 'SV');
    return [...Array(maxValue)].map((_, index) => <i key={index} className={`star-rating fa-star fa-${index < vote ? 'solid' : 'regular'}`}></i>);

}