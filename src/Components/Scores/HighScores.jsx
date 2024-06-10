import axios from 'axios'
import { useState, useEffect} from 'react'
import './ScoreCard.css'
import ScoreCard from './ScoreCard'

const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_SCORES
const AIRTABLE_KEY = process.env.REACT_APP_PERSONAL_ACCESS_TOKEN
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/chickener-scores `

export default function HighScores() {
    const [ scores, setScores ] = useState([])

    useEffect(() => {
        const getScores = async () => {
            const res = await axios.get(URL, {headers: {
                Authorization: `Bearer ${AIRTABLE_KEY}`
            }})
            setScores(res.data.records)
            console.log(res.data.records)
        }
        getScores()
    }, [])
    
    if(scores.length === 0){
        return <div className='body-size'>Loading...</div>
    }


    return (
        <div className='body-size'>
        <h2>High Scores</h2>
        <div className="scores">
            <div className="score-div">
                {scores.filter((score) => score.fields.completion === "Yes").sort(function (a,b) {return a.fields.clicks - b.fields.clicks}).map((score) => {
                    return <ScoreCard score={score} key={score.id}/>
                })}
            </div>
        </div>
        </div>
    )
}
