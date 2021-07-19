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

    const bottomRef = useRef();
    const scoreDiv = useRef();
    // console.log(bottomRef.current)
    // const scrollToBottom = () => {
    //     bottomRef.current?.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //     });
    // };

    const scrollDiv = () => {
        // setScroll(prevScroll=> prevScroll + 200)
        scoreDiv.current?.scrollTo({
            top: 200,
            left: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        // scrollToBottom()
        scrollDiv()
        // console.log(scroll)
    }, [scroll])

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

    // console.log(scores)
    return (
        <>
        <h2>High Scores</h2>
        <div className="scores">
            <div ref={scoreDiv} className="score-div">
                {scores.map((score) => {
                    return <ScoreCard score={score} key={score.id}/>
                })}
                <div ref={bottomRef}></div>
            </div>
        </div>
        </>
    )
}
