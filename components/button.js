import styles from '../styles/components/buttons/button.module.scss'
import React from 'react';

const Button = React.forwardRef(({name, surveyData, surveyHash, myClick, onClick, href }, ref) => {

    return (
        <a className='button button-primary' href={href} onClick={handleChange} ref={ref} >
            {name}
        </a>
    )
})
  
  export default Button;