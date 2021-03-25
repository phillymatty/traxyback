//star rating.js
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
const StCheckbox = props => (
    <Checkbox
    value="checkedA"
    inputProps={{ 'aria-label': 'Checkbox A' }}
    onChange={(event) => {
        props.question.answer = event.target.checked.toString()
        props.callback(props.surveyData, props.surveyHash)
    }}
    />
)

export default StCheckbox;