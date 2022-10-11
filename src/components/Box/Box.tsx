import { FunctionComponent, useState, useEffect, useRef } from "react";
import "components/Box/Box.css"

const Box: FunctionComponent = () =>
{
    const [firstColor, setFirstColor] = useState<string>("")
    const [secondColor, setSecondColor] = useState<string>("")
    const [thirdColor, setThirdColor] = useState<string>("")

    const firstDiv = useRef<HTMLDivElement>(null)
    const secondDiv = useRef<HTMLDivElement>(null)
    const thirdDiv = useRef<HTMLDivElement>(null)

    function randomColor(): string
    {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    useEffect(() => 
        {
            if (firstDiv.current != null)
            {
                firstDiv.current.style.backgroundColor = randomColor()
            }
        },[firstColor]
    )

    useEffect(() => 
        {
            if (secondDiv.current != null)
            {
                secondDiv.current.style.backgroundColor = randomColor()
            }
        },[secondColor]
    )

    useEffect(() => 
        {
            if (thirdDiv.current != null)
            {
                thirdDiv.current.style.backgroundColor = randomColor()
            }
        },[thirdColor]
    )

    return (
        <div className="box" ref={firstDiv}>
            <button onClick={() => setFirstColor(randomColor())}>Cambia colore</button>
        </div>
    )

}
export default Box