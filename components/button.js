import styles from '../styles/components/buttons/button.module.scss'
import React from 'react';

const Button = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} className={styles.button}>
            {props.children}
        </a>
    )
})
  
  export default Button;