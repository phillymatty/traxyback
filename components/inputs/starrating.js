//star rating.js
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function StarRating({props}) {
    const uniqueName = `rating${props.number}`
    return (
        <div>
            <Rating
                name={uniqueName}
                defaultValue={2}
            />
        </div>
    )
}