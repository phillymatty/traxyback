//Input.js
import Textarea from './textarea'
import StarRating from './starrating'
import RadioButtonsGroup from './radio'
import StCheckbox from './checkbox'
import styles from '../../styles/components/Inputs.module.scss'

const Input = props => (
    <div className={`question question${props.question.sort}`}>
        <label className={styles.label}>{props.question.question} </label>
        {InputType(props)}
    </div>
)

export default Input;

function InputType(props) {
   if(props.question.question_type == 'true-false'){
       return <RadioButtonsGroup props={props} />
   }
   else if(props.question.question_type == 'text'){
       return <Textarea props={props}/>
   }
   else if (props.question.question_type == 'star'){
        return  <StarRating props={props}/>
   }
}