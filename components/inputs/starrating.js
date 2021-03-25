//star rating.js
import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function StarRating({props}) {
    const uniqueName = `rating${props.question.question_id}`;
    const defaultValue = (props.question.answer != '' ? props.question.answer : 0);
    return (
            <Rating
                name={uniqueName}
                defaultValue={defaultValue}
                onChange={(event, newValue) => {
                    props.callback()
                }}
            />
    )
}