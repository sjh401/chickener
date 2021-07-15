import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Chicken from './Chicken/Chicken'
import Counter from './Counter'
import NewScore from './NewScore'
import Timer from './Timer'
import Vehicle from './Vehicle/Vehicle'




const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_GRID
const AIRTABLE_BASE_SCORES = process.env.REACT_APP_AIRTABLE_BASE_SCORES
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/grid `
const scoreURL = `https://api.airtable.com/v0/${AIRTABLE_BASE_SCORES}/chickener-scores `

export default function GameGrid() {
    const [ grid, setGrid ] = useState([])
    const [ clickNS, setClickNS ] = useState(9)
    const [ clickEW, setClickEW ] = useState(6)
    const [ carMove, setCarMove ] = useState(11)
    const [ gameStart, setGameStart ] = useState(false)
    const [ clickCount, setClickCount ] = useState(0)
    const [ chickenPosition, setChickenPosition ] = useState()
    const chicken = useRef();
    // const [ vehiclePosition, setVehiclePosition ] = useState({})
    // // const vehicleID = ``
    // const vehicle = useRef(0);
    // const container
    function chickenFocus () {
        console.log(chicken)
        setChickenPosition(chicken.current)
    }

    // const [ time, setTime ] = useState()
    const [ gameOver, setGameOver ] = useState(false)
    // const [ user, setUser ] = useState("")
    // const [ input, setInput ] = useState(newForm)

    useEffect(() => {
        const getGrid = async () => {
            const res = await axios.get(URL, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
            setGrid(res.data.records)
        }
        getGrid()
        chickenFocus()
    }, [])

    useEffect(() => {
        function moveCar() {
            setCarMove((prevCarMove)=> prevCarMove - 1)
        }
        ((gameStart === true) && carMove > 1) ? setTimeout(moveCar,1000): setCarMove(11)
    }, [carMove || gameStart])

    if(grid.length === 0){
        return <div>Loading...</div>
    }
    // useEffect(() => {
    //     const postScore = async() =>{
    //         const resScore = await axios.post(URL, {
    //             name: prompt("Please enter your username", "Foghorn Leghorn"),
    //             clicks: clickCount,
    //             time: time,
    //             completion: "yes"
    //         }, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
    //         console.log(resScore)
    //     }
    //     postScore()
    // }, [gameOver])
        
    function up() {
        if(clickNS < 1) return setClickNS(1)
        setClickNS((prevClick)=> prevClick - 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
        ironmanHasTheGauntlet()
        chickenFocus()
    }
    function left() {
        if(clickEW < 3) return setClickEW(2)
        setClickEW((prevClick)=> prevClick - 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
    }
    function right() {
        if(clickEW > 9) return setClickEW(10)
        setClickEW((prevClick)=> prevClick + 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
    }
    function down() {
        if(clickNS > 8) return setClickNS(9)
        setClickNS((prevClick)=> prevClick + 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
    }
    const gridFilter = (order, block) => {
        if(block.fields?.order === order) { return <img key={block.id} src={block.fields.image} alt={block.fields.name} className="image-grid"/>} 
    }

    function startStop(){
        setGameStart((prevGameStart) => !prevGameStart)
        setCarMove((prevCarMove)=> prevCarMove - 1)
    }

    // function chickenDead(){
    //     if(chickenPosition === vehiclePosition){
    //         setGameOver(true)
    //         alert("You have been crushed")
    //     }
    // }

    const ironmanHasTheGauntlet = () => {
        if(clickNS === 2){
            // setUser(prompt("Please enter your username", "Foghorn Leghorn"))
            setGameStart(false)
            setGameOver(true)
        } else {
            setGameStart(true)
        }
    }

    return (
        <div className="game-board">
                <Chicken NS={clickNS} EW={clickEW} ref={chicken}/>
                {/* <Vehicle row={8} column={carMove - 1} id={Math.random()}/> */}
                <Vehicle row={6} column={carMove} id={Math.random()}/>
                {/* <Vehicle row={4} column={carMove} id={Math.random()}/>
                <Vehicle row={2} column={carMove - 1} id={Math.random()}/> */}
                <div className="left-board">
                    <div>
                        <button onClick={startStop}>{(gameStart=== false) ? "Start":"Stop"}</button>
                    </div>
                    <div>
                        <div>{gameOver === true && <NewScore/>}</div>
                    </div>
                </div>
                <div className="center-board" >
                    {grid.map((block) => gridFilter(1, block))}
                    {grid.map((block) => gridFilter(2, block))}
                    {grid.map((block) => gridFilter(3, block))}
                </div>
                <div className="right-board">
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
