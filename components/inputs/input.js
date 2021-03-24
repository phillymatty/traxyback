//Input.js
import Textarea from './textarea'
import StarRating from './starrating'
import Checkbox from './checkbox'

const Input = props => (
    <div>
        <label>{props.prompt} </label>
        {InputType(props)}
    </div>
)

export default Input;

function InputType(props) {
   if(props.type == 'checkbox'){
       return <Checkbox props />
   }
   else if((props.type == 'input')){
       return <Textarea props/>
   }
   return  <StarRating props/>
}