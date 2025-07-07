import { useState } from "react"



export default function States(){


    const [value, setInputVal] = useState(0)


    const [str1, setInput] = useState("")

    const [bool1, setBool] = useState(true)

    const changeVal = () => {
        setInputVal(value+1)
    }

    const handleInputChange = (event) => {

        setInput(event.target.value)
    }

    


    return (
        <>
        <div className="App">
            {value}
            <h1>Button</h1>
            <button onClick={changeVal}>Click me</button>
            </div>  


            <div>    
            <input type ="text" onChange={handleInputChange} />
            {str1}
            </div>

            <div>

                
                <button onClick={() => {
                    alert("hey")
                }} > Say hey</button>
                <button onClick={() => {
                    setBool(!bool1)
                }} > Show/Hide</button>

                {bool1 && <h1>Hello tis visible.</h1>}
            </div>
        </>
    )

}