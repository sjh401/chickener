import React, { useState, useEffect, useRef } from 'react'
import Chicken from './Chicken/Chicken'
import GameBoard from './GameBoard'
import NewScore from './NewScore'
import Vehicle from './Vehicle/Vehicle'
import Helicopter from './Vehicle/Helicopter'

export default function GameGrid() {
    const carRight ="https://www.pinclipart.com/picdir/big/541-5412152_red-car-png-clipart-free-download-searchpng-antique.png"
    const carLeft = "https://www.pinclipart.com/picdir/big/486-4863204_motocross-clipart-race-car-motocross-clipart-png-transparent.png"

    const [ avatar, setAvatar ] = useState("https://www.pinclipart.com/picdir/big/535-5356460_no-eyes-chicken-clip-art-at-clker-chicken.png")
    const [ clickNS, setClickNS ] = useState(9)
    const [ clickEW, setClickEW ] = useState(6)
    const [ carMove, setCarMove ] = useState(11)
    const [ carMoveRight, setCarMoveRight ] = useState(2)
    const [ gameStart, setGameStart ] = useState(false)
    const [ gameOver, setGameOver ] = useState(false)
    const [ clickCount, setClickCount ] = useState(0)
    const [ time, setTime ] = useState(0)
    const [ completion, setCompletion ] = useState("No")
    const [ chickenPosition, setChickenPosition ] = useState({})
    const [ helicopterPosition, setHelicopterPosition ] = useState({})
    const [ hand, setHand ] = useState("Right")

    const chicken = useRef();
    const vehicle = useRef();
    const helicopter = useRef();

    function chickenFocus () {
        setChickenPosition({x: chicken.current?.getBoundingClientRect().x ,y: chicken.current?.getBoundingClientRect().y})
    }
    function helicopterFocus () {
        setHelicopterPosition({x: helicopter.current?.getBoundingClientRect().x, y: helicopter.current?.getBoundingClientRect().y})
    }
    function moveCar() {
        if(helicopterPosition === chickenPosition){
            setCarMove(prevCarMove => prevCarMove)
        }
        setCarMove((prevCarMove)=> prevCarMove - 1)
    }
    function moveCarRight() {
        if(helicopterPosition === chickenPosition){
            setCarMoveRight(prevCarMove => prevCarMove)
        }
        setCarMoveRight((prevCarMove)=> prevCarMove + 1)
    }
    function moveCars() {
        moveCar()
        moveCarRight()
    }
    function carOrigin(){
        setCarMoveRight(1)
        setCarMove(11)
    }
    function vMove(){
        moveCars()
        helicopterFocus()
        chickenFocus()
        ironmanHasTheGauntlet()
    }
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
    function startStop(){
        setGameStart(!gameStart)
        setCarMove((prevCarMove)=> prevCarMove - 1)
    }
    function peterQuillPunchesThanos(){
            alert("You have been crushed")
    }
    const ironmanHasTheGauntlet = () => {
        if(
            (clickNS === 3 && clickEW === carMove) || 
            (clickNS === 6 && clickEW === carMove) || 
            (clickNS === 4 && clickEW === carMoveRight) || 
            (clickNS === 7 && clickEW === carMoveRight) ||
            (chickenPosition.y !== undefined && chickenPosition.y === helicopterPosition.y && chickenPosition.x === helicopterPosition.x)
            ){
            setGameOver(!gameOver)
            setGameStart(!gameStart)
            peterQuillPunchesThanos()    
        } else if (clickNS < 2){
            setGameStart(false)
            setGameOver(!gameOver)
            setCompletion("Yes")
            console.log(chickenPosition)
            console.log(helicopterPosition)
        }
    }
    
    useEffect(() => {
        ((gameStart === true) && carMove > 1) ? setTimeout(vMove,1000) && setTime(prevTime=> prevTime + 1) : carOrigin() && setTime(prevTime=> prevTime)
        // eslint-disable-next-line
    }, [gameStart, carMove])
    // function handle(e) {
    //     e.preventDefault()
    //     console.log('You pressed a key!')
    //     }
    // function handleKeyDown(event) {
    //     console.log('handling a key press');
    // }

    return (
        <div className="body">
            <h1 className="title">{(avatar === "https://www.pinclipart.com/picdir/big/519-5194941_chicken-looking-right-svg-clip-arts-orange-chicken.png")? "Turk'e'er":"Chik'n'er"}</h1>
            <div className="game-board">
                <div className={(gameOver === true) ? "show":"hidden"} >
                    {gameOver === true && <NewScore clicks={clickCount} completion={completion} time={time} />}
                </div>
                <div className={((gameOver === false) && (gameStart === false) && (time === 0))? "show":"hidden"} >
                    {time === 0 && <div className={"div-avatar"}>
                        <p>Choose your avatar.</p>
                        <br />
                        <img 
                        src="https://www.pinclipart.com/picdir/big/535-5356460_no-eyes-chicken-clip-art-at-clker-chicken.png"
                        alt="eyeless-chicken" 
                        className="chicken-avatar"
                        onClick={(e)=>setAvatar("https://www.pinclipart.com/picdir/big/535-5356460_no-eyes-chicken-clip-art-at-clker-chicken.png")}
                        />
                        <img 
                        src="https://www.pinclipart.com/picdir/big/519-5194941_chicken-looking-right-svg-clip-arts-orange-chicken.png"
                        alt="turkey" 
                        className="chicken-avatar"
                        onClick={(e)=>setAvatar("https://www.pinclipart.com/picdir/big/519-5194941_chicken-looking-right-svg-clip-arts-orange-chicken.png")}
                        />
                        <img 
                        src="https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png"
                        alt="chicken" 
                        className="chicken-avatar"
                        onClick={(e)=>setAvatar("https://upload.wikimedia.org/wikipedia/en/a/a0/Foghorn_Leghorn.png")}
                        />
                    </div> }
                </div>
                    <Chicken avatar={avatar} NS={clickNS} EW={clickEW} ref={chicken}/>
                    <Vehicle row={6} column={carMove} car={carLeft} id={Math.random()} ref={vehicle}/>
                    <Vehicle row={4} column={carMoveRight} car={carRight} id={Math.random()} ref={vehicle}/>
                    <Vehicle row={3} column={carMove} car={carLeft} id={Math.random()} ref={vehicle}/>
                    <Vehicle row={7} column={carMoveRight} car={carRight} id={Math.random()} ref={vehicle}/>
                    <Helicopter gameStart={gameStart} ref={helicopter}/>
                <div className={(hand==="Right") ? "left-board":"left-board-left"}>
                    <div>
                        <button onClick={startStop}>
                            {(gameStart=== false) ? "Start":"Stop"}
                        </button>
                    </div>
                    <p>
                        {time}       
                    </p>
                </div >
                <GameBoard />
                <div className={(hand==="Right") ? "right-board":"right-board-left"}>
                    <div>   
                        <button className="arrows" onClick={up} onKeyDown={keyed}>↑</button>
                        <br />
                        <button className="arrows" onClick={left}>←</button>
                        <button className="arrows" onClick={right}>→</button>
                        <br />
                        <button className="arrows" onClick={down}>↓</button>
                        <br />
                        {clickCount}
                    </div>
                </div>
            </div>
            <section className={(time===0) ? "handed-show":"handed-hidden"}>
                <p>
                    Select arrow position.
                </p>
                <button onClick={(e)=>setHand("Left")}>Left</button>
                <button onClick={(e)=>setHand("Right")}>Right</button>
            </section>
        </div>
    )
}