import { FunctionComponent, useState, useEffect, useRef } from "react";
import "components/Box/Box.css"

const Box: FunctionComponent = () =>
{
    const [color, setColor] = useState<string>("")

    const div = useRef<HTMLDivElement>(null)

    function randomColor(): string
    {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    useEffect(() => 
        {
            if (div.current != null)
            {
                div.current.style.backgroundColor = randomColor()
            }
        },[color]
    )

    return (
        <div className="box" ref={div}>
            <button onClick={() => setColor(randomColor())}>Cambia colore</button>
        </div>
    )

}
export default Box