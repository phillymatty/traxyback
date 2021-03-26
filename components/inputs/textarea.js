//Textarea.js
import React from 'react';

export default function Textarea({props}) {
    const [newVal, setValue] = React.useState(props.question.answer);

   const handleChange = (event) => {
        setValue(event.target.value);
        props.question.answer = newVal
        props.callback(props.surveyData, props.surveyHash)
      }
return (
    <div className="textArea">
        <textarea
            onChange={handleChange}
            value={newVal}
            rows='6'
        />
    </div>
)

}