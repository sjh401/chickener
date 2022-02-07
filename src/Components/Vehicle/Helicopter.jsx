import React, { forwardRef } from 'react'
import helicopter from '../../assets/images/helicopter.png'
    
const Helicopter = forwardRef((props, helicopter) => {

    return(
        <img src={helicopter}
        alt="helicopter" 
        className="helicopter" 
        style={{
        gridRowStart: `${props.helicopterY}`,
        gridColumnStart: `${props.helicopterX}`,
        zIndex: "3"}}
        ref={helicopter}
        />
        )
    }
)

export default Helicopter