import React, {useState} from 'react'



function TextForm(props) {
    const [text, setText] = useState('Enter text here')
    // text = "new text"; // wronge way to change the state
    // setText = ("new text"); // right way to change the state

    const handleUpClick = function(){
        console.log("Uppercase was clicked");
        setText(text.toUpperCase())
        
    }
    const handleOnChange = function(event){

        setText(event.target.value)
       
        
    }

    return (
        <div>
          
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>


            </div>

            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
        
        </div>
    )
}

export default TextForm
