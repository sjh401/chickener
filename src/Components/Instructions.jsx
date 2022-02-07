import React from 'react'

export default function Instructions() {
    return (
        <div className="body-size">
            <h3>Game Play Instructions</h3>
            <div className="instructions">
                <h4><span style={{textDecoration: "underline", fontSize: "large"}}>Scoring</span></h4>
                <p>Scores are recored based on number of clicks to finish, time, and completion.</p>
            </div>
            <div className="instructions">
                <h4><span style={{textDecoration: "underline", fontSize: "large"}}>Desktop</span></h4>
                <p>
                Choose your hero.
                <br />
                Use arrow buttons to move chicken across the road. 
                <br />
                Watch out for cars, motorcycles, and helicopters!
                </p>
            </div>
            <div className="instructions">
                <h4><span style={{textDecoration: "underline", fontSize: "large"}}>Mobile</span></h4>
                <p>
                Set arrow button position before game start.
                <br />
                Choose your hero.
                <br />
                Use arrow buttons to move chicken across the road. 
                <br />
                Watch out for cars, motorcycles, and helicopters!
                </p>
            </div>
        </div>
    )
}
