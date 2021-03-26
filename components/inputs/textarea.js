//Textarea.js
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Textarea({props}) {
    const [newVal, setValue] = React.useState(props.question.answer);

   const handleChange = (event) => {
        setValue(event.target.value);

        console.warn('event.target.innerHTML', event)
        props.question.answer = newVal
        
        props.callback(props.surveyData, props.surveyHash)
        console.warn(' props.question.answer',  props.question.answer)
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