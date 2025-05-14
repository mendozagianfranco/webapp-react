import axios from 'axios';
import { useState } from 'react';

export default function FormReview({ movie_id }) {

    const initialForm = {
        name: "",
        vote: 1,
        text: ""
    };

    const [formData, setFormData] = useState(initialForm);

    function addReview(e) {
        e.preventDefault();
        const endpoint = `http://127.0.01:3000/api/movies/${movie_id}/reviews`;
        axios.post(endpoint, formData)
            .then(res => {
                setFormData(initialForm);
            });
    }

    function handleFormData(e) {
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }));
        console.log(formData);

    }


    return (
        <div className='container container-form'>
            <h2>ADD REVIEW</h2>
            <form onSubmit={addReview}>
                <div className='container-form-input'>
                    <label htmlFor='name-review' >Name</label>
                    <input required type="text" onChange={handleFormData} value={formData.name} name="name" id="name-review" />
                </div>
                <div className='container-form-input'>
                    <label htmlFor='vote-review'>Vote</label>
                    <input required type="number" onChange={handleFormData} value={formData.vote} name='vote' id='vote-review' min='1' max='5' />
                </div>
                <div className='container-form-input'>
                    <label htmlFor='text-review'>Text</label>
                    <textarea id='text-review' onChange={handleFormData} value={formData.text} name='text' cols='60' rows='15'></textarea>
                </div>
                <button className='btn-info' type='submit'>Send Review</button>
            </form>
        </div>

    );
}