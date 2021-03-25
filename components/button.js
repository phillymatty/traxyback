import styles from '../styles/components/buttons/button.module.scss'
import React from 'react';

const Button = React.forwardRef(({name, surveyData, surveyHash, myClick, onClick, href }, ref) => {
    surveyData.is_complete = true
    myClick(surveyData, surveyHash)
    return (
        <a className='button button-primary' href={href} onClick={onClick} ref={ref} >
            {name}
        </a>
    )
})
  
  export default Button;