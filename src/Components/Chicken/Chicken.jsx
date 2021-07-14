import React from 'react'
import "../../App.css"


export default function Chicken(props) {
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
            zIndex: "1"}}/>
    )
}

// ${props.up}