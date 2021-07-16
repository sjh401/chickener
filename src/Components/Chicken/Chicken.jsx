import React, { forwardRef } from 'react'
import "../../App.css"

const Chicken = forwardRef((props, chicken) => (
// export default function Chicken(props, ref) {
    // const [ chickenPosition, setChickenPosition ] = useState()
    // const chicken = useRef(0);

    // function chickenFocus () {
    //     setChickenPosition(props.ref.current.focus())
    // }


    // console.log(chickenT)
    // console.log(`Chicken ${chicken.current?.offsetLeft}`)
    // console.log(chicken.current?.offsetTop)

            <img 
            // src="https://png.pngtree.com/png-vector/20200417/ourlarge/pngtree-cute-chicken-cartoon-illustration-png-image_2184671.jpg" 
            src="https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png"
            alt="Chicken" 
            className="chicken" 
            style={{
            gridRowStart: `${props.NS}`,
            gridColumnStart: `${props.EW}`,
            // maxHeight: "50px",
            // maxWidth: "50px",
            margin: "0 0 -3px 0",
            zIndex: "1"}}
            ref={chicken}
            // onChange={chickenFocus}
            />
))

export default Chicken