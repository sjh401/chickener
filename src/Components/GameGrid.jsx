import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Chicken from './Chicken/Chicken'
import Counter from './Counter'
import NewScore from './NewScore'
import Timer from './Timer'
// import Timer from './Timer'
import Vehicle from './Vehicle/Vehicle'




const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_GRID
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/grid `

export default function GameGrid() {
    const [ grid, setGrid ] = useState([])

    const [ clickNS, setClickNS ] = useState(9)
    const [ clickEW, setClickEW ] = useState(6)

    const [ carMove, setCarMove ] = useState(11)

    const [ gameStart, setGameStart ] = useState(false)
    const [ gameOver, setGameOver ] = useState(false)

    const [ clickCount, setClickCount ] = useState(0)
    const [ time, setTime ] = useState(0)
    const [ completion, setCompletion ] = useState("No")

    const [ chickenPosition, setChickenPosition ] = useState({})
    const [ vehiclePosition, setVehiclePosition ] = useState({})
    const chicken = useRef();
    const vehicle = useRef();


    function chickenFocus () {
        // console.log(chicken.current?.offsetTop)
        setChickenPosition({y: chicken.current?.offsetTop})
    }
    function vehicleFocus () {
        // console.log(vehicle.current?.offsetTop)
        setVehiclePosition({y: vehicle.current?.offsetTop})
    }

    useEffect(() => {
        const getGrid = async () => {
            const res = await axios.get(URL, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
            setGrid(res.data.records)
        }
        // console.log('useEffect grid')
        getGrid()
        chickenFocus()
        vehicleFocus()
    }, [])

    useEffect(() => {
        ((gameStart === true) && carMove > 1) ? setTimeout(vMove,1000) && setTime(prevTime=> prevTime + 1) : setCarMove(11) && setTime(prevTime=> prevTime)
        // console.log('useEffect move car')
    }, [carMove])

    if(grid.length === 0){
        return <div>Loading...</div>
    }

    function moveCar() {
        if(vehiclePosition === chickenPosition){
            setCarMove(prevCarMove => prevCarMove)
        }
        setCarMove((prevCarMove)=> prevCarMove - 1)
    }
    function vMove(){
        moveCar()
        vehicleFocus()
        chickenFocus()
        ironmanHasTheGauntlet()
    }

    function up() {
        if(clickNS < 1) return setClickNS(1)
        if(gameOver === false){
        setClickNS((prevClick)=> prevClick - 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
        ironmanHasTheGauntlet()
        }
    }
    function left() {
        if(clickEW < 3) return setClickEW(2)
        if(gameOver === false){
        setClickEW((prevClick)=> prevClick - 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
        }
    }
    function right() {
        if(clickEW > 9) return setClickEW(10)
        if(gameOver === false){
        setClickEW((prevClick)=> prevClick + 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
        }
    }
    function down() {
        if(clickNS > 8) return setClickNS(9)
        if(gameOver === false){
            setClickNS((prevClick)=> prevClick + 1)
            setClickCount((prevClickCount) => prevClickCount + 1)
        }
    }
    const gridFilter = (order, block) => {
        if(block.fields?.order === order) { return <img key={block.id} src={block.fields.image} alt={block.fields.name} className="image-grid"/>} 
    }

    function startStop(){
        setGameStart(!gameStart)
        setCarMove((prevCarMove)=> prevCarMove - 1)
        // console.log('in start stop')
    }

    function peterQuillPunchesThanos(){
            alert("You have been crushed")
    }

    const ironmanHasTheGauntlet = () => {
        if(vehiclePosition === chickenPosition) {
            setGameOver(!gameOver)
            setGameStart(!gameStart)
            peterQuillPunchesThanos()
            console.log(`vehiclePosition === chickenPosition`)
        
        } else if (clickNS === 2){
            setGameStart(!gameStart)
            setGameOver(!gameOver)
            setCompletion("Yes")
        }
    }
    
    // console.log('before return')
    return (
        <div className="game-board">
            <div className={(gameOver === true) ? "show":"hidden"} >{gameOver === true && <NewScore clicks={clickCount} completion={completion} time={time} />}</div>
                <Chicken NS={clickNS} EW={clickEW} ref={chicken}/>
                {/* <Vehicle row={8} column={carMove - 1} id={Math.random()}/> */}
                <Vehicle row={6} column={carMove} id={Math.random()} ref={vehicle}/>
                {/* <Vehicle row={4} column={carMove} id={Math.random()}/>
                <Vehicle row={2} column={carMove - 1} id={Math.random()}/> */}
                <div className="left-board">
                    <div>
                        {/* <Timer gameStart={gameStart} carMove={carMove}/> */}
                        {time}
                    </div>
                    <div>
                        <button onClick={startStop}>{(gameStart=== false) ? "Start":"Stop"}</button>
                    </div>
                </div>
                <div className="center-board" >
                    {grid.map((block) => gridFilter(1, block))}
                    {grid.map((block) => gridFilter(2, block))}
                    {grid.map((block) => gridFilter(3, block))}
                </div>
                <div className="right-board">
                    {/* <div style={(gameOver === false) ? visability: "visible" : visability: "hidden"}> */}
                    <div>   
                        <button onClick={up} >up</button>
                        <br />
                        <button onClick={left}>left</button><button onClick={right}>right</button>
                        <br />
                        <button onClick={down}>down</button>
                    </div>
                    <div>
                        <Counter count={clickCount} />
                    </div>
                </div>
            </div>
    )
}
