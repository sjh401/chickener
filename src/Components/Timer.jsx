import React, {useEffect, useState} from 'react'

export default function Timer(props) {
    const [ time, setTime ] = useState(0)

useEffect(() => {
    (props.gameStart === true) ? setTime(prevTime=> prevTime + 1): setTime(prevTime=> prevTime)

}, [props.carMove])

    return (
        <div className="timer">
            {time}
        </div>
    )
}

