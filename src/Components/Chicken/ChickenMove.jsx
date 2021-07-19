import React, { useState } from 'react'
import Chicken from './Chicken'


export default function ChickenMove() {
    const [ clickNS, setClickNS ] = useState(9)
    const [ clickEW, setClickEW ] = useState(6)
    const [ clickCount, setClickCount ] = useState(0)

    function up() {
        if(clickNS < 1) return setClickNS(1)
        if(gameOver === false){
        setClickNS((prevClick)=> prevClick - 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
        ironmanHasTheGauntlet()
        }
    }
    function left() {
        if(clickEW < 3) return setClickEW(2)
        if(gameOver === false){
        setClickEW((prevClick)=> prevClick - 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
        }
    }
    function right() {
        if(clickEW > 9) return setClickEW(10)
        if(gameOver === false){
        setClickEW((prevClick)=> prevClick + 1)
        setClickCount((prevClickCount) => prevClickCount + 1)
        }
    }
    function down() {
        if(clickNS > 8) return setClickNS(9)
        if(gameOver === false){
            setClickNS((prevClick)=> prevClick + 1)
            setClickCount((prevClickCount) => prevClickCount + 1)
        }
    }


    return (
        <div className="right-board">
            <div>
                {clickCount}
            </div>
            <div >   
                <button onClick={up}>↑</button>
                <br />
                <button onClick={left}>←</button><button onClick={right}>→</button>
                <br />
                <button onClick={down}>↓</button>
            </div>
        </div>
    )
}
