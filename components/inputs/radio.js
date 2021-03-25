import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel 
            value="female" 
            control={<Radio />} 
            label="Female"
            onChange={(event) => {
              props.question.answer = event.target.checked.toString()
              props.callback(props.surveyData, props.surveyHash)
            }}
          />
          <FormControlLabel 
            value="male" 
            control={<Radio />} 
            label="Male" 
            onChange={(event) => {
              props.question.answer = event.target.checked.toString()
              props.callback(props.surveyData, props.surveyHash)
            }}
          />
        </RadioGroup>
      </FormControl>
    );
  }