import { FunctionComponent, useState, useEffect, useRef } from "react";

const Box: FunctionComponent = () =>
{
    const [color, setColor] = useState<string>("")

    const firstDiv = useRef<HTMLDivElement>(null)

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
        }, 
        [color]
    )

    return (
        <>
            <div ref={firstDiv}>
                <button onClick={() => setColor(randomColor())}>Cambia colore</button>
            </div>
        </>
    )

}
export default Box