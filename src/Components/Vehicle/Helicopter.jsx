import React, { forwardRef, useState, useEffect } from 'react'
    
const Helicopter = forwardRef((props, helicopter) => {
    const [ helicopterX, setHelicopterX ] = useState(6)
    const [ helicopterY, setHelicopterY ] = useState(6)

    function moveHeli() {
        setHelicopterX(8-(Math.floor(Math.random()*6)))
        setHelicopterY(8-(Math.floor(Math.random()*6)))
    }

    useEffect(() => {
        ((props.gameStart === true)) ? setTimeout(moveHeli,1000) : setHelicopterX(6) && setHelicopterY(6)
        // eslint-disable-next-line
    }, [props.gameStart, helicopterX, helicopterY])

    return(
        <img src="https://www.pinclipart.com/picdir/big/527-5276927_helicopter-rotor-clipart.png"
        alt="helicopter" 
        className="helicopter" 
        style={{
        gridRowStart: `${helicopterY}`,
        gridColumnStart: `${helicopterX}`,
        zIndex: "3"}}
        ref={helicopter}
        />
        )
    }
)

export default Helicopter