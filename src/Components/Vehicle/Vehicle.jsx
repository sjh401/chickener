import React, { forwardRef} from 'react'
    
const Vehicle = forwardRef((props, vehicle) => (

        <img src={props.car}
        alt="car" 
        className="vehicle" 
        style={{
        gridRowStart: `${props.row}`,
        gridColumnStart: `${props.column}`,
        zIndex: "2"}}
        />
    )
)

export default Vehicle