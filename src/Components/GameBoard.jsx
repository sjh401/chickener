import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_GRID
const AIRTABLE_KEY = process.env.REACT_APP_PERSONAL_ACCESS_TOKEN
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/grid `

export default function GameBoard() {
    const [ grid, setGrid ] = useState([])

    useEffect(() => {
        const getGrid = async () => {
            const res = await axios.get(URL, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
            setGrid(res.data.records)
        }
        getGrid()
    }, [])

    const gridFilter = (block) => {
        return <img key={block.id} 
                    src={block.fields.image} 
                    alt={block.fields.name} 
                    className="image-grid"/>
    }

    if(grid.length === 0){
        return <div>Loading...</div>
    }
    return (
        <div className="center-board" >
            {grid.filter((grid) => grid.fields.order === 1).map(gridFilter)}
            {grid.filter((grid)=> grid.fields.order === 2).map(gridFilter)}
            {grid.filter((grid)=> grid.fields.order === 3).map(gridFilter)}
        </div>
    )
}
