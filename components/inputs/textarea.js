//Textarea.js
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function Textarea({props}) {

return (
   <div className="textArea">

       <TextareaAutosize
       onChange={(event) => {
        props.question.answer = event.target.innerHTML.toString()
        props.callback(props.surveyData, props.surveyHash)
      }}
       aria-label="minimum height" rowsMin={6}
       defaultValue={props.question.answer}     />
   </div>
)

}