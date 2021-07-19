import React, { forwardRef} from 'react'
    
const Helicopter = forwardRef((props, helicopter) => (

        <img src="https://www.pinclipart.com/picdir/big/527-5276927_helicopter-rotor-clipart.png"
        alt="helicopter" 
        className="helicopter" 
        style={{
        gridRowStart: `${props.row}`,
        gridColumnStart: `${props.column}`,
        zIndex: "3"}}
        ref={helicopter}
        />
    )
)

export default Helicopter