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
       return <Checkbox props={props} />
   }
   else if((props.type == 'input')){
       return <Textarea props={props}/>
   }
   return  <StarRating props={props}/>
}