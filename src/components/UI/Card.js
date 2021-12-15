import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={`${classes.card} ${props.className}`}> 
            {props.children}
        </div>
    )
}

export default Card

// this is how we apply 2 styles first is intern 2nd is external
//<div className={`${classes.card} ${props.className}`}> 
