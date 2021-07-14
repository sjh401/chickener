import React, { createRef, useRef, useEffect, useState } from 'react'
import "../../App.css"


export default function Chicken(props) {
    const [ chickenPosition, setChickenPosition ] = useState({})
    const { chickenT } = createRef("");

    function chickenTFocus () {
        setChickenPosition(chickenT.current.focus())
    }

    if(chickenT === undefined) return(
        <img src="https://png.pngtree.com/png-vector/20200417/ourlarge/pngtree-cute-chicken-cartoon-illustration-png-image_2184671.jpg" 
        alt="Chicken" 
        className="chicken" 
        style={{
        gridRowStart: `${props.NS}`,
        // girdRowEnd: "10",
        gridColumnStart: `${props.EW}`,
        // girdColumnEnd: "7",
        maxHeight: "50px",
        // girdArea: "9/1/10/2",
        maxWidth: "50px",
        margin: "0 0 -3px 0",
        zIndex: "1"}}/>
    )
    console.log(chickenPosition)
    console.log(chickenT.current.focus())
    return (
            <img src="https://png.pngtree.com/png-vector/20200417/ourlarge/pngtree-cute-chicken-cartoon-illustration-png-image_2184671.jpg" 
            alt="Chicken" 
            className="chicken" 
            style={{
            gridRowStart: `${props.NS}`,
            // girdRowEnd: "10",
            gridColumnStart: `${props.EW}`,
            // girdColumnEnd: "7",
            maxHeight: "50px",
            // girdArea: "9/1/10/2",
            maxWidth: "50px",
            margin: "0 0 -3px 0",
            zIndex: "1"}}
            ref={chickenT}
            onClick={chickenTFocus}/>
    )
}

// ${props.up}