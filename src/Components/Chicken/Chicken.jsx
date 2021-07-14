import React, { createRef, useRef, useEffect, useState } from 'react'
import "../../App.css"


export default function Chicken(props) {
    const [ chickenPosition, setChickenPosition ] = useState()
    const chickenT = useRef(0);

    function chickenTFocus () {
        setChickenPosition(chickenT.current.focus())
    }


    console.log(chickenT)
    console.log(chickenT.current?.offsetLeft)
    console.log(chickenT.current?.offsetTop)

    return (
            <img src="https://png.pngtree.com/png-vector/20200417/ourlarge/pngtree-cute-chicken-cartoon-illustration-png-image_2184671.jpg" 
            alt="Chicken" 
            className="chicken" 
            style={{
            gridRowStart: `${props.NS}`,
            gridColumnStart: `${props.EW}`,
            maxHeight: "50px",
            maxWidth: "50px",
            margin: "0 0 -3px 0",
            zIndex: "1"}}
            ref={chickenT}
            onChange={chickenTFocus}
            />
    )
}