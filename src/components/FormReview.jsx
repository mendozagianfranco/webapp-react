export default function FormReview() {
    return (
        <div className='container container-form'>
            <h2>ADD REVIEW</h2>
            <form>
                <div className='container-form-input'>
                    <label htmlFor='name-review' >Name</label>
                    <input required type="text" name="" id="name-review" />
                </div>
                <div className='container-form-input'>
                    <label htmlFor='vote-review'>Vote</label>
                    <input required type="number" id='vote-review' min='1' max='5' />
                </div>
                <div className='container-form-input'>
                    <label htmlFor='text-review'>Text</label>
                    <textarea id='text-review' cols='60' rows='15'></textarea>
                </div>
                <button className='btn-info' type='submit'>Send Review</button>
            </form>
        </div>

    );
}