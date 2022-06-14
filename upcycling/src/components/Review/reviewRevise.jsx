import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CSS/reviewRevise.module.css'

//🍎 Review를 수정하는 페이지


const ReviewRevise = ({createAndUpdateReview ,userId}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user] = useState(userId)

    const review = location.state.review
    const [changedReview, setChangedReview] = useState({});

    console.log(user)
    const onChange = event => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        setChangedReview( {
            ...review,
            [event.currentTarget.name] : event.currentTarget.value
        });
    };


    const SubmitReview = () => {
        //console.log(changedReview);
        createAndUpdateReview(changedReview,user)
        navigate('/reviews')
    }

    return (
        <section>
            <select name="" id="">
                <option value="">말머리1</option>
                <option value="">말머리2</option>
                <option value="">말머리3</option>
            </select>
                <label htmlFor="reviewTitle">
                    <input 
                        name='reviewTitle' 
                        type="text" 
                        defaultValue={review?review.reviewTitle:''} 
                        onChange={onChange}
                    />
                </label>
                <br/>
                <label htmlFor="reviewHashtags">
                    <input 
                        name='reviewHashtags' 
                        type="text" 
                        defaultValue={review?review.reviewHashtags:''}
                        onChange={onChange}
                    />
                </label>
                
                <br/>
                <textarea 
                    className={styles.reviewDescription}
                    name="reviewTitle" 
                    defaultValue={review?review.reviewDescription:''}
                    onChange={onChange}
                ></textarea>
                <br/>
                <input 
                    type="file"
                    accept='image/*'
                    name='file'
                    
                />
                <button onClick={SubmitReview}>수정</button>
                
        </section>
    );
};

export default ReviewRevise;