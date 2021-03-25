//Textarea.js
import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Textarea = props => (
   <div className="textArea">

       <TextareaAutosize
       aria-label="minimum height" rowsMin={6}
       defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua."
     />
   </div>
)

export default Textarea;