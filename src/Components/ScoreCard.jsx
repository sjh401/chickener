import React from 'react'

export default function ScoreCard(props) {
    return (
        <div>
            <h3>{props.score.fields?.name}</h3>
            <h4>{props.score.fields?.clicks}</h4>
            <h5>{props.score.fields?.time}</h5>
            <h6>{props.score.fields?.completion}</h6>
        </div>
    )
}
