import React, { forwardRef} from 'react'
    
const Vehicle = forwardRef((props, vehicle) => (

        <img src={props.car}
        alt="car-left" 
        className="car-right" 
        style={{
        backgroundColor: 'red',
        gridRowStart: `${props.row}`,
        gridColumnStart: `${props.column}`,
        margin: "0 0 -3px 0",
        zIndex: "3"}}
        id={props.id}
        ref={vehicle}
        />
    )
)

export default Vehicle