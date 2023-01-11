

import { useEffect, useState } from "react"
import data from '../components/data'

export default function Game({mult}) {
    const [chickenDinner, setChickenDinner] = useState(false)
    const [paint, setPaint] = useState(null)
    const [border, setBorder] = useState(null)
    const [current, setCurrent] = useState(null)


    const numbers = data[0].numbers
    const colours = data[0].colours
    const colours2 = data[0].colours

    const whiteText = ["black", "saddlebrown", "green", "red", "dodgerblue"]

    const num2 = numbers.map((num, i) => ({id:i, n:num, g:0}))
    const [gameState, setGameState] = useState(num2)

    

    const handleMouseOver = () => {
        if (!paint) {
            document.body.style.cursor = "pointer"
        }
    }

    const handleMouseLeave = () => {
        if (!paint) {
            document.body.style.cursor = "auto"
        }
    }

    const handlePaintClick = (event) => {
        // console.log(event.target.style.backgroundColor)
        setPaint(event.target.style.backgroundColor)
        const colour = event.target.style.backgroundColor;
        event.target.style.border = "4px solid #dacaca"

        // document.body.style.cursor = `url(/brushes/${colour}paint.png), pointer`

        

        if (border && event.target !== border) {
            border.style.border = "1px solid black"
        }
        setBorder(event.target)
        setCurrent(event.target.innerHTML / mult)
    }


    useEffect(() => {

        if (paint) {
            document.body.style.cursor = `url(/brushes/${paint}paint.png), pointer`
        }
    }, [paint])




    const updateState = (x) => {
        const newState = gameState.map(obj => {
          if (obj.id == x) {
            return {...obj, g:current};
          }
    
          return obj;
        });
    
        setGameState(newState);
      };

    const handleSquareClick = (event) => {

        const paintedSquare = event.target.getAttribute("class").slice(-2)

        if (paint && !chickenDinner)
            {
                updateState(paintedSquare);

                if (current == gameState[Number(paintedSquare)].n) {
                event.target.setAttribute("style", `background-color: ${paint}; color: ${paint}`)
            }
            else if (whiteText.includes(paint)) {  
            event.target.setAttribute("style", `background-color: ${paint}; color: white`)
            }
            else {
                event.target.setAttribute("style", `background-color: ${paint}; color: black`)}}
        

        
        // setGameState((gameState) => gameState.map(square, i))

    }

    useEffect(() => {
        const isCorrect = (el) => {
            return el.n == el.g}

        let result = gameState.every(isCorrect)

        setChickenDinner(result)

    }, [gameState])

    useEffect(() => {
        document.getElementById("current--colour").style.backgroundColor = paint
        // document.getElementById("current--colour").style.color = paint
        
        document.getElementById("current--colour").style.color = whiteText.includes(paint) ? "white" : "black"
        
    }, [paint])


    useEffect(() => {
        if (chickenDinner) {document.body.style.cursor = 'cursor'}
    }, [chickenDinner])


    return (
        <div className="Game">
            <div className="game--container">

                <h1 className="pixel--title">{mult} Times Table</h1>
                    <div className="hidden">
                        <div className="paint--text--left">Current Colour</div>
                        <div className="current--colour" id="current--colour">{current ? current*mult : "?"}</div>
                        <h3 className="rules--title">Rules</h3>
                        <ol className="rules--list">
                        <li>Hover over a colour to select it.</li>
                        <li>Find any multiplications that equal the selected colour.</li>
                        <li>Click on each multiplication to colour it in.</li>
                        <li>If the multiplication matches the colour, it will disappear.</li>
                        <li>Repeat until you have coloured in the whole picture.</li>
                        <li>Admire your artwork.</li>
                        </ol>
                    </div>
                    <div className="pixel--board">
                        {numbers.map((number, i) => (<div onClick={(event) => handleSquareClick(event)} className={`pixel--square ${i}`} key={i}>{number} &times; {mult}</div>))}
                    </div>
                    <div className="paint--container">
                        <div className="paint--text">Select Colour</div>
                        <div className="paints">
                            {colours.map((obj) => (
                            <div key={`paint${obj.num}`} 
                                onMouseOver={(event) => handleMouseOver(event)}
                                onMouseLeave={(event) => handleMouseLeave(event)} 
                                onMouseDown={(event) => handlePaintClick(event)} 
                                className="paintbox" 
                                style={whiteText.includes(obj.colour)  ?  {backgroundColor: obj.colour, color:"white"} : {backgroundColor: obj.colour}} >{obj.num*mult}
                            </div>))}
                        </div>
                    </div>

                    {chickenDinner && <h1 className="chicken--dinner">YOU DID IT!</h1>}
                </div>
        </div>
    )
}