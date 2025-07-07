import { useState } from "react"



export default function States(){


    const [value, setInputVal] = useState(0)

    const changeVal = () => {
        setInputVal(value+1)
    }


    return (
        <div className="App">
            {value}
            <button onClick={changeVal}>Click me</button>
            </div>
    )

}