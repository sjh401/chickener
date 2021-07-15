import React from 'react'

export default function Instructions() {
    return (
        <div className="instructions">
            <h3 className="instruction header">Game How To's</h3>
            <div className="instruciton scoring">
                Scores are recored based on number of clicks to finish, time, and completion.
            </div>
            <div className="instruction desktop">
                Use arrow buttons to move chicken across the road. Watch out for cars!
            </div>
            <div className="instruction-mobile">
                <p>
                    Set arrow button position before game start.
                </p>
                <p>
                    Use arrow buttons to move chicken across the road. Watch out for cars!
                </p>
            </div>
        </div>
    )
}
