import React, { forwardRef } from 'react'
import "../../App.css"

const Chicken = forwardRef((props, chicken) => (
    <img 
        src={props.avatar}
        alt="chicken" 
        className="chicken" 
        style={{
        gridRowStart: `${props.Y}`,
        gridColumnStart: `${props.X}`,
        zIndex: "1"}}
        ref={chicken}
    />
))

export default Chicken