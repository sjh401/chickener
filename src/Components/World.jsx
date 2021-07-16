// import axios from 'axios'
// import React from 'react'
// import { useState, useEffect, useRef } from 'react'
// // import Chicken from './Chicken/Chicken'
// import Counter from './Counter'
// import NewScore from './NewScore'
// // import Timer from './Timer'
// // import Vehicle from './Vehicle/Vehicle'




// const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_GRID
// const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
// const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/grid `

// export default function World() {
//     const [ grid, setGrid ] = useState([])

//     const [ clickNS, setClickNS ] = useState(9)
//     const [ clickEW, setClickEW ] = useState(6)

//     const [ carMove, setCarMove ] = useState(11)

//     const [ gameStart, setGameStart ] = useState(false)
//     const [ gameOver, setGameOver ] = useState(false)

//     const [ clickCount, setClickCount ] = useState(0)
//     // const [ time, setTime ] = useState()

//     const [ chickenPosition, setChickenPosition ] = useState({})
//     const [ vehiclePosition, setVehiclePosition ] = useState({})
//     const chicken = useRef();
//     const vehicle = useRef();


//     function chickenFocus () {
//         console.log(Math.floor(chicken.current?.offsetTop/100))
//         setChickenPosition({y: Math.floor(chicken.current?.offsetTop/100)})
//     }
//     function vehicleFocus () {
//         console.log(Math.floor(vehicle.current?.offsetTop/100))
//         setVehiclePosition({y: Math.floor(vehicle.current?.offsetTop/100)})
//     }

//     useEffect(() => {
//         const getGrid = async () => {
//             const res = await axios.get(URL, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
//             setGrid(res.data.records)
//         }
//         getGrid()
//         chickenFocus()
//     }, [])
//     function ironmanHasTheGauntlet() {
//         if(vehiclePosition === chickenPosition) {
//             // setGameOver(true)
//             // setGameStart(false)
//             // chickenDead()
//             return (<div className="game-board">
//             <div className={(gameOver === true) ? "show":"hidden"} >{gameOver === true && <NewScore clicks={clickCount} />}</div>
//                 <div className="left-board">
//                 </div>
//                 <div className="center-board" >
//                     {grid.map((block) => gridFilter(1, block))}
//                     {grid.map((block) => gridFilter(2, block))}
//                     {grid.map((block) => gridFilter(3, block))}
//                 </div>
//                 <div className="right-board">
//                     <div>
//                         <Counter count={clickCount} />
//                     </div>
//                 </div>
//             </div>
//             )
        
//         } else if (clickNS === 2){
//             setGameStart(prevGameStart => !prevGameStart)
//             setGameOver(true)
//         } else {
//             setGameOver(false)
//         }
//     }
//     useEffect(() => {
//         ironmanHasTheGauntlet
//         ((gameStart === true) && carMove > 1) ? setTimeout(vMove,1000): setCarMove(11)
//     }, [carMove || gameStart])

//     if(grid.length === 0){
//         return <div>Loading...</div>
//     }

//     function moveCar() {
//         setCarMove((prevCarMove)=> prevCarMove - 1)
//     }
//     function vMove(){
//         // ironmanHasTheGauntlet()
//         moveCar()
//         vehicleFocus()
//         chickenFocus()
        
//     }

//     function up() {
//         if(clickNS < 1) return setClickNS(1)
//         setClickNS((prevClick)=> prevClick - 1)
//         setClickCount((prevClickCount) => prevClickCount + 1)
//     }
//     function left() {
//         if(clickEW < 3) return setClickEW(2)
//         setClickEW((prevClick)=> prevClick - 1)
//         setClickCount((prevClickCount) => prevClickCount + 1)
//     }
//     function right() {
//         if(clickEW > 9) return setClickEW(10)
//         setClickEW((prevClick)=> prevClick + 1)
//         setClickCount((prevClickCount) => prevClickCount + 1)
//     }
//     function down() {
//         if(clickNS > 8) return setClickNS(9)
//         setClickNS((prevClick)=> prevClick + 1)
//         setClickCount((prevClickCount) => prevClickCount + 1)
//     }
//     const gridFilter = (order, block) => {
//         if(block.fields?.order === order) { return <img key={block.id} src={block.fields.image} alt={block.fields.name} className="image-grid"/>} 
//     }

//     function startStop(){
//         setGameStart((prevGameStart) => !prevGameStart)
//         setCarMove((prevCarMove)=> prevCarMove - 1)
//     }

//     // function chickenDead(){
//             alert("You have been crushed")
//     }

//     // const ironmanHasTheGauntlet = () => {
//     //     if(vehiclePosition === chickenPosition) {
//     //         // setGameOver(true)
//     //         // setGameStart(false)
//     //         // chickenDead()
//     //         return (<div className="game-board">
//     //         <div className={(gameOver === true) ? "show":"hidden"} >{gameOver === true && <NewScore clicks={clickCount} />}</div>
//     //             <div className="left-board">
//     //             </div>
//     //             <div className="center-board" >
//     //                 {grid.map((block) => gridFilter(1, block))}
//     //                 {grid.map((block) => gridFilter(2, block))}
//     //                 {grid.map((block) => gridFilter(3, block))}
//     //             </div>
//     //             <div className="right-board">
//     //                 <div>
//     //                     <Counter count={clickCount} />
//     //                 </div>
//     //             </div>
//     //         </div>
//     //         )
        
//     //     } else if (clickNS === 2){
//     //         setGameStart(prevGameStart => !prevGameStart)
//     //         setGameOver(true)
//     //     }
//     // }

//     return (
//         <div className="game-board">
//             <div className={(gameOver === true) ? "show":"hidden"} >{gameOver === true && <NewScore clicks={clickCount} />}</div>
//                 <Chicken NS={clickNS} EW={clickEW} ref={chicken}/>
//                 {/* <Vehicle row={8} column={carMove - 1} id={Math.random()}/> */}
//                 <Vehicle row={6} column={carMove} id={Math.random()} ref={vehicle}/>
//                 {/* <Vehicle row={4} column={carMove} id={Math.random()}/>
//                 <Vehicle row={2} column={carMove - 1} id={Math.random()}/> */}
//                 <div className="left-board">
//                     <div>
//                         <button onClick={startStop}>{(gameStart=== false) ? "Start":"Stop"}</button>
//                     </div>
//                 </div>
//                 <div className="center-board" >
//                     {grid.map((block) => gridFilter(1, block))}
//                     {grid.map((block) => gridFilter(2, block))}
//                     {grid.map((block) => gridFilter(3, block))}
//                 </div>
//                 <div className="right-board">
//                     {/* <div style={(gameOver === false) ? visability: "visible" : visability: "hidden"}> */}
//                     <div>   
//                         <button onClick={up} >up</button>
//                         <br />
//                         <button onClick={left}>left</button><button onClick={right}>right</button>
//                         <br />
//                         <button onClick={down}>down</button>
//                     </div>
//                     <div>
//                         <Counter count={clickCount} />
//                     </div>
//                 </div>
//             </div>
//     )
// }

