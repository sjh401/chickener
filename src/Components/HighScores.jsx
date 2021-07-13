import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

import ScoreCard from './ScoreCard'

const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/chickener-scores `
export default function HighScores() {
    const [ scores, setScores ] = useState([])

    useEffect(() => {
        const getScores = async () => {
            const res = await axios.get(URL, {headers: {Authorization: `Bearer ${AIRTABLE_KEY}`}})
            setScores(res.data.records)
        }
        getScores()
    }, [])

    if(scores.length === 0){
        return <div>Loading...</div>
    }

    console.log(scores)

    return (
        <div>
            High Scores
            {scores.map((score) => {
                return <ScoreCard score={score} key={score.id}/>
            })}
        </div>
    )
}
