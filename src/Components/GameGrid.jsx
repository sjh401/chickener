import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Chicken from './Chicken/Chicken'


const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_GRID
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/grid `

export default function GameGrid() {
    const [ grid, setGrid ] = useState([])
    const [ click, setClick ] = useState(9)

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

    function handleClick() {
        setClick((prevClick)=> prevClick - 1)
        console.log(click)
    }
    console.log(click)
    const gridFilter = (order, block) => {
        if(block.fields?.order === order) { return <img key={block.id} src={block.fields.image} alt={block.fields.name} className="image-grid"/>} 
    }

    return (
            <div className="game-board">
                <Chicken up={click}/>
                <div className="left-board"></div>
                <div className="center-board">
                    {grid.map((block) => gridFilter(1, block))}
                    {grid.map((block) => gridFilter(2, block))}
                    {grid.map((block) => gridFilter(3, block))}
                </div>
                <div className="right-board"><button onClick={handleClick}>up</button></div>
            </div>
    )
}
