import { useState } from "react"



export default function States(){


    const [value, setInputVal] = useState(0)

    const changeVal = () => {
        <button onClick={setInputVal(value+1)}>Click me</button>
    }


    return (
        <div className="App">{value}</div>
    )

}