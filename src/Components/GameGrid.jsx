import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_GRID
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/grid `

export default function GameGrid() {
    const [ grid, setGrid ] = useState([])

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
    console.log(grid)
    return (
        <div>
            <div className="game-board">
                <div className="left-board">left</div>
                <div className="center-board">
                {grid.map((grid) => {
                    if(grid.fields.order === 1) { return <img src={grid.fields.image} alt={grid.fields.name} className={grid.fields.name}/>}
                    // return <div className={grid.fields.name} key={grid.id}><img src={grid.fields.image} alt={grid.fields.name}/></div>
                })}
                {grid.map((grid) => {
                    if(grid.fields.order === 2) { return <img src={grid.fields.image} alt={grid.fields.name} className={grid.fields.name}/>}
                    // return <div className={grid.fields.name} key={grid.id}><img src={grid.fields.image} alt={grid.fields.name}/></div>
                })}
                {grid.map((grid) => {
                    if(grid.fields.order === 3) { return <img src={grid.fields.image} alt={grid.fields.name} className={grid.fields.name}/>}
                    // return <div className={grid.fields.name} key={grid.id}><img src={grid.fields.image} alt={grid.fields.name}/></div>
                })}
                </div>
                <div className="right-board">right</div>
            </div>
        </div>
    )
}
