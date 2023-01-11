
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({mult, setMult}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/app')
    }

    const handleChange = (event) => {
        setMult(event.target.value)
    }


    useEffect(() => {

        document.body.style.cursor = "auto"
        
    }, [])


    return (
        <div className="Home">
            <h1 className="game--title">PIXEL ART x TIMES TABLES</h1>
            <div className="select">
                <h3>Choose your times table: </h3>
                <select onChange={(event) => handleChange(event)} value={mult} className="select--button" name="times--table--selct">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <button className="play--button" onClick={handleClick}>Play</button>

        </div>
    )
}