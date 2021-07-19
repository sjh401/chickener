import React, { forwardRef } from 'react'
import "../../App.css"

const Chicken = forwardRef((props, chicken) => (
    <img 
    src={props.avatar}
    alt="chicken" 
    className="chicken" 
    style={{
    gridRowStart: `${props.NS}`,
    gridColumnStart: `${props.EW}`,
    // margin: "0 0 -3px 0",
    zIndex: "1"}}
    ref={chicken}
    />
))

export default Chicken