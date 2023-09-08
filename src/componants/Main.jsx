
import React, { useState } from 'react'

export default function Main(props) {
    const [text, setText] = useState("")
    const handleInput = (e) => {
        setText(e.target.value)

    }
    const toUpperCase = () => {
        setText(text.toUpperCase())
    }
    const toLowerCase = () => {
        setText(text.toLowerCase())
    }
    const toclear = () => {
        setText("")
    }

    const toCopy = () => {
        let text = document.getElementById('exampleFormControlTextarea1')
        text.select()

        navigator.clipboard.writeText(text.value)
    }
    const toRemoveSpaces = () => {
        setText(text.split(/[ ]+/).join(" "))
    }




    return (
        <>
            <div className="mb-3 container">
                <label for="exampleFormControlTextarea1" className="form-label my-3"><h3>Enter your Text here...</h3></label>
                <textarea className="form-control " id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleInput}></textarea>
                <button className="btn btn-primary m-2" onClick={toUpperCase}>toUppercase</button>
                <button className="btn btn-primary m-2" onClick={toLowerCase}>toLowercase</button>
                <button className="btn btn-primary m-2" onClick={toclear}>Clear</button>
                <button className="btn btn-primary m-2" onClick={toRemoveSpaces}>Remove Spaces</button>
                <button className='btn btn-primary m-2' onClick={toCopy}>Copy</button>



            </div>
            <div className="container" >
                <h3>Text Summery</h3>
                <p>There are {text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters</p>
                <p>Time to read the text entered: {text.split("").length > 0 ? 0.008 * text.split(" ").length : "type to calculate the"} mins</p>
            </div>
            <div className="container">
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview"}</p>
            </div>

        </>
    )
}
