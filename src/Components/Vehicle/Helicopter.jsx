import React, { forwardRef } from 'react'
    
const Helicopter = forwardRef((props, helicopter) => {

    return(
        <img src="https://www.pinclipart.com/picdir/big/527-5276927_helicopter-rotor-clipart.png"
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