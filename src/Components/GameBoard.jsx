import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_GRID
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
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

    const gridFilter = (order, block) => {
        if(block.fields?.order === order) {
            return <img key={block.id} 
                        src={block.fields.image} 
                        alt={block.fields.name} 
                        className="image-grid"/>
        } 
    }

    if(grid.length === 0){
        return <div>Loading...</div>
    }
    return (
        <div className="center-board" >
            {grid.map((block) => gridFilter(1, block))}
            {grid.map((block) => gridFilter(2, block))}
            {grid.map((block) => gridFilter(3, block))}
        </div>
    )
}
