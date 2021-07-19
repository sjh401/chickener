import React, { forwardRef} from 'react'
    
const Helicopter = forwardRef((props, helicopter) => (

        <img src="https://www.pinclipart.com/picdir/big/527-5276927_helicopter-rotor-clipart.png"
        alt="car-left" 
        className="helicopter" 
        style={{
        gridRowStart: `${props.row}`,
        gridColumnStart: `${props.column}`,
        // margin: "0 0 -3px 0",
        zIndex: "3"}}
        ref={helicopter}
        />
    )
)

export default Helicopter