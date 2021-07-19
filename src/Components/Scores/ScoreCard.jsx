import React from 'react'
import './ScoreCard.css'

export default function ScoreCard(props) {
    return (
        <div className="score-card">
            <h3>Username: {props.score.fields?.name}</h3>
            <h4># of Clicks: {props.score.fields?.clicks}</h4>
            <h5>Duration: {props.score.fields?.time}</h5>
            <h6>Completed: {props.score.fields?.completion}</h6>
        </div>
    )
}
