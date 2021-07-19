import React, { useState, useEffect, useRef } from 'react'
import Chicken from './Chicken/Chicken'
import GameBoard from './GameBoard'
import NewScore from './NewScore'
import Vehicle from './Vehicle/Vehicle'

// const carRight = "https://spng.subpng.com/20180613/gzq/kisspng-compact-car-artega-gt-jeep-car-doodle-5b20a2fd25e768.4374958215288655331553.jpg"
// const carLeft = "https://cdn.iconscout.com/icon/premium/png-256-thumb/car-684-363175.png"

const carRight ="https://www.pinclipart.com/picdir/big/541-5412152_red-car-png-clipart-free-download-searchpng-antique.png"
const carLeft = "https://www.pinclipart.com/picdir/big/486-4863204_motocross-clipart-race-car-motocross-clipart-png-transparent.png"


export default function GameGrid() {
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
    const [ vehiclePosition, setVehiclePosition ] = useState({})

    // const [toggle, setToggle] = useState(true)
    const chicken = useRef();
    const vehicle = useRef();


    function chickenFocus () {
        // console.log(chicken.current?.getBoundingClientRect())
        setChickenPosition({y: chicken.current?.getBoundingClientRect().y})
    }
    function vehicleFocus () {
        setVehiclePosition({y: vehicle.current?.getBoundingClientRect().y})
    }

    useEffect(() => {
        ((gameStart === true) && carMove > 1) ? setTimeout(vMove,500) && setTime(prevTime=> prevTime + 1) : carOrigin() && setTime(prevTime=> prevTime)
        // eslint-disable-next-line
    }, [gameStart, carMove])

    // useEffect(() => {
    //     if(chickenPosition.y !== undefined && chickenPosition.y === vehiclePosition.y && toggle) {
    //     alert(chickenPosition)
    //     setToggle(false)
    //     console.log(chickenPosition)
    //     console.log(vehiclePosition)
    //     }
    // },[chickenPosition, vehiclePosition])



    function moveCar() {
        if(vehiclePosition === chickenPosition){
            setCarMove(prevCarMove => prevCarMove)
        }
        setCarMove((prevCarMove)=> prevCarMove - 1)
    }

    function moveCarRight() {
        if(vehiclePosition === chickenPosition){
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
        vehicleFocus()
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
        // console.log('in start stop')
    }

    function peterQuillPunchesThanos(){
            alert("You have been crushed")
    }

    const ironmanHasTheGauntlet = () => {
        if(
            (clickNS === 3 && clickEW === carMove) || 
            (clickNS === 6 && clickEW === carMove) || 
            (clickNS === 4 && clickEW === carMoveRight) || 
            (clickNS === 7 && clickEW === carMoveRight)
            ){
            setGameOver(!gameOver)
            setGameStart(!gameStart)
            peterQuillPunchesThanos()    
        } else if (clickNS < 2){
            setGameStart(false)
            setGameOver(!gameOver)
            setCompletion("Yes")
        }
    }
    // function handle(e) {
    //     e.preventDefault()
    //     console.log('You pressed a key!')
    //     }
    // function handleKeyDown(event) {
    //     console.log('handling a key press');
    // }
    console.log(gameOver)
    console.log(gameStart)

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
                <div className="left-board">
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
                <div className="right-board">
                    <div>
                        {clickCount}
                    </div>
                    <div >   
                        <button className="arrows" onClick={up}>↑</button>
                        <br />
                        <button className="arrows" onClick={left}>←</button><button className="arrows" onClick={right}>→</button>
                        <br />
                        <button className="arrows" onClick={down}>↓</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
