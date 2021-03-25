//star rating.js
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
  };
export default function StarRating({props}) {
    const uniqueName = `rating${props.question.question_id}`;
    const defaultValue = (props.question.answer != '' ? props.question.answer : 0);
    const [value, setValue] = React.useState(defaultValue);
    const [hover, setHover] = React.useState(-1);
  
    return (
      <div className='StarRating'>
        <Rating
          name={uniqueName}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            props.question.answer = newValue.toString()
            props.callback()
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      </div> 
    )
}