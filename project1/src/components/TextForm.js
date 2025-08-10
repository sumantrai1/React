import React, { useState } from 'react'



function TextForm(props) {
    const [text, setText] = useState('')
    // text = "new text"; // wronge way to change the state
    // setText = ("new text"); // right way to change the state

    const handleUpClick = function () {
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase())

    }
    const handleLowClick = function () {
        // console.log("Lowrcase was clicked");
        setText(text.toLowerCase())

    }

    const handleClearText = () => {
        let text = ''
        setText(text)
    }


    const handleOnChange = function (event) {

        setText(event.target.value)


    }

    const handleCopy = function(){
        console.log('I am copy');
        let text = document.getElementById('myBox')
        text.select()
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 " onClick={handleLowClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 " onClick={handleClearText} >Clear Text</button>
                <button className="btn btn-primary mx-2 " onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces} >Remove extra space</button>
            </div>

            <div className="container my-3" >
                <h2>Your text summary</h2>
                <p> {text.split(" ").length}  words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>



        </>
    )
}

export default TextForm
