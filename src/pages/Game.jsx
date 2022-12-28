import { useEffect, useState } from "react"

export default function Game({mult}) {
    const [chickenDinner, setChickenDinner] = useState(false)
    const [paint, setPaint] = useState(null)
    const [border, setBorder] = useState(null)
    const [current, setCurrent] = useState(null)
    const numbers = [
        3,3,3,3,7,7,3,3,3,3,
        3,3,3,5,5,5,5,3,3,3,
        3,3,9,9,9,9,9,9,3,3,
        3,6,12,6,12,12,6,12,6,3,
        3,6,12,12,10,10,12,12,6,3,
        3,3,11,11,11,11,11,11,3,3,
        7,2,2,4,4,4,11,2,2,7,
        12,12,2,4,4,4,4,11,12,12,
        12,12,12,8,4,4,8,12,12,12,
        12,12,8,8,12,12,8,8,12,12
        ]

    const whiteText = ["black", "saddlebrown"]

    const num2 = numbers.map((num, i) => ({id:i, n:num, g:0}))
    const [gameState, setGameState] = useState(num2)

    const colours = [{num:6, colour:"black"}, {num:2, colour:"darkgray"}, {num:4, colour:"lightgray"}, {num:12, colour:"white"},{num:3, colour:"azure"}, {num:9, colour:"dodgerblue"}, {num:5, colour:"green"}, {num:7, colour:"yellow"}, {num:10, colour:"orange"}, {num:11, colour:"red"}, {num:8, colour:"saddlebrown"}]

    const handlePaintClick = (event) => {
        // console.log(event.target.style.backgroundColor)
        setPaint(event.target.style.backgroundColor)
        const colour = event.target.style.backgroundColor;
        event.target.style.border = "4px solid lightgrey"

        document.body.style.cursor = `url(../src/assets/${colour}paint.png), pointer`

        if (border) {
            border.style.border = "1px solid black"
        }
        setBorder(event.target)
        setCurrent(event.target.innerHTML / mult)
    }

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

        if (paint)
            {if (current == gameState[Number(paintedSquare)].n) {
                // console.log("correctomundo")
                event.target.setAttribute("style", `background-color: ${paint}; color: ${paint}`)
            }
            else if (whiteText.includes(paint)) {  
            event.target.setAttribute("style", `background-color: ${paint}; color: white`)
            }
            else {
                event.target.setAttribute("style", `background-color: ${paint}; color: black`)}}
        

        updateState(paintedSquare)
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
    })


    return (
        <div className="Game">
            <div className="game--container">

                <h1 className="pixel--title">{mult} Times Table</h1>
                    <div className="hidden">
                        <div className="paint--text--left">Current Colour</div>
                        <div className="current--colour" id="current--colour">{current ? current*mult : "?"}</div>
                        <h3 className="rules--title">Rules</h3>
                        <ol className="rules--list">
                        <li>Click on a colour to select it.</li>
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
                            {colours.map((obj) => (<div key={`paint${obj.num}`} onClick={(event) => handlePaintClick(event)} className="paintbox" style={whiteText.includes(obj.colour)  ?  {backgroundColor: obj.colour, color:"white"} : {backgroundColor: obj.colour}} >{obj.num*mult}</div>))}
                        </div>
                    </div>

                    {chickenDinner && <h1 className="chicken--dinner">YOU WIN!</h1>}
                </div>
        </div>
    )
}