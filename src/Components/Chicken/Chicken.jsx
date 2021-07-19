import React, { forwardRef } from 'react'
import "../../App.css"

const Chicken = forwardRef((props, chicken) => (
    <img 
    src="https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png"
    alt="Chicken" 
    className="chicken" 
    style={{
    gridRowStart: `${props.NS}`,
    gridColumnStart: `${props.EW}`,
    margin: "0 0 -3px 0",
    zIndex: "1"}}
    ref={chicken}
    />
))

export default Chicken