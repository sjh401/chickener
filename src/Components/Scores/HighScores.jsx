import axios from 'axios'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './ScoreCard.css'

import ScoreCard from './ScoreCard'

const AIRTABLE_BASE= process.env.REACT_APP_AIRTABLE_BASE_SCORES
const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/chickener-scores `

export default function HighScores() {
    const [ scores, setScores ] = useState([])
    const [ scroll, setScroll ] = useState(0)
    const [ toggle, setToggle ] = useState(false)

    const bottomRef = useRef();
    const scoreDiv = useRef();
    console.log(scoreDiv.current)


    const scrollDiv = () => {
        setScroll(prevScroll => prevScroll + 200)
        console.log(scroll)
        scoreDiv.current?.scrollTo({
            top: scroll,
            left: 0,
            behavior: "smooth",
        }) 
    }
    // const a = setInterval(() => {
    //     setToggle(prevScroll => !prevScroll)
    //     console.log(toggle)
    // },1000)

    // setTimeout(function() { clearInterval(a); }, 20000)

    useEffect(() => {

        scrollDiv()

    }, [toggle])

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


    return (
        <>
        <h2>High Scores</h2>
        <div className="scores">
            <div ref={scoreDiv} className="score-div">
                {scores.map((score) => {
                    return <ScoreCard score={score} key={score.id}/>
                })}
            </div>
        </div>
        </>
    )
}
