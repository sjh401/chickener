import React from 'react'

export default function Vehicle(props) {

    const carLeft = "https://cdn.iconscout.com/icon/premium/png-256-thumb/car-684-363175.png"
    const carRight = "https://spng.subpng.com/20180613/gzq/kisspng-compact-car-artega-gt-jeep-car-doodle-5b20a2fd25e768.4374958215288655331553.jpg"
    return (
        <img src={carRight}
        alt="car-left" 
        className="car-right" 
        style={{
        gridRowStart: `${props.row}`,
        gridColumnStart: `${props.column}`,
        maxHeight: "50px",
        maxWidth: "50px",
        margin: "0 0 -3px 0",
        zIndex: "1"}}

        />
    )
}
