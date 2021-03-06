//star rating.js
import React from 'react';
import Rating from '@material-ui/lab/Rating';

const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
  };
export default function StarRating({props}) {
    const uniqueName = `rating${props.question.question_id}`;
    const defaultValue = (props.question.answer != '' ? parseInt(props.question.answer) : 0);
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
            props.callback(props.surveyData, props.surveyHash)
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <div className='starLabels' ml={2}>{labels[hover !== -1 ? hover : value]}</div>}
      </div> 
    )
}