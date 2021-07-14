import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Chicken from './Chicken/Chicken'


const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_GRID
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/grid `

export default function GameGrid() {
    const [ grid, setGrid ] = useState([])
    const [ clickNS, setClickNS ] = useState(9)
    const [ clickEW, setClickEW ] = useState(6)
    const [ coords, setCoords ] = useState({})
    const [ chickenPos, setChickenPos ] = useState({})


    useEffect(() => {
        const getGrid = async () => {
            const res = await axios.get(URL, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
            setGrid(res.data.records)
        }
        getGrid()
    }, [])

    if(grid.length === 0){
        return <div>Loading...</div>
    }


    function up(click , e) {
        if(clickNS < 1) return setClickNS(1)
        setClickNS((prevClick)=> prevClick - 1)
        // setChickenPos({x: e?.nativeEvent.offsetX, y: e?.nativeEvent.offsetY})
        // setChickenPos({x: offsetX, y: offsetY})
        // console.log(clickNS)
    }
    function left(click) {
        if(clickEW < 3) return setClickEW(2)
        setClickEW((prevClick)=> prevClick - 1)
        // console.log(clickEW)
    }
    function right(click) {
        if(clickEW > 9) return setClickEW(10)
        setClickEW((prevClick)=> prevClick + 1)
        // console.log(clickEW)
    }
    function down(click) {
        if(clickNS > 8) return setClickNS(9)
        setClickNS((prevClick)=> prevClick + 1)
        // console.log(clickNS)
    }

    const gridFilter = (order, block) => {
        if(block.fields?.order === order) { return <img key={block.id} src={block.fields.image} alt={block.fields.name} className="image-grid"/>} 
    }

    function chickenTrack(e, chicken) {
        let idX = chicken + "X";
        let idY = chicken + "Y";
    }
    function update(e) {
        e.preventDefault()
        setCoords({x: e.nativeEvent.offsetX, y:e.nativeEvent.offsetY});
    }
    console.log(coords)
    console.log(chickenPos)
    return (
            <div className="game-board" onClick={update}>
                <Chicken NS={clickNS} EW={clickEW}/>
                <div className="left-board"></div>
                <div className="center-board" >
                    {/* {grid.map((block) => gridFilter(1, block))}
                    {grid.map((block) => gridFilter(2, block))}
                    {grid.map((block) => gridFilter(3, block))} */}
                </div>
                <div className="right-board">
                    <button onClick={up} >up</button>
                    <br />
                    <button onClick={left}>left</button><button onClick={right}>right</button>
                    <br />
                    <button onClick={down}>down</button>
                </div>
            </div>
    )
}
