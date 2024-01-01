import React, { useState } from 'react'

export default function Textform() {
    const [text, settext] = useState("");
    const handleUpClick=()=>{
        let uptext=text.toUpperCase();
        settext(uptext);
    }
    const handleLoClick=()=>{
        let uptext=text.toLowerCase();
        settext(uptext);
    }
    const handleClear=()=>{
        settext("");
    }
    const handleCopy=()=>{
        const textToCopy =text;
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Text copied to clipboard');
    }
    const handleSpaces=()=>{
        let a=text.trim();
        let words=a.split(/\s+/);
        let result=words.join(" ");
        settext(result);
    }
    const handleOnChange=(event)=>{
        settext(event.target.value);
    }
    const countWords=(sentence)=> {
        sentence = sentence.trim();
        if (sentence === "") {
            return 0;
        }
        var words = sentence.split(/\s+/);
        return words.length;
    }
    return (
        <div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label" style={{ fontSize: '35px' }} >Enter the text to analyze</label>
                <textarea className="form-control"  onChange={handleOnChange} placeholder="Enter text here" value={text} id="exampleFormControlTextarea1 textCopy" rows="16" style={{ width: '100%' }}></textarea>
                <div className="buttons container d-flex justify-content-between align-items-center">
                <button className="btn btn-primary mt-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mt-2" onClick={handleClear}>Clear Text</button>
                <button className="btn btn-primary mt-2" onClick={handleSpaces}>Remove extra spaces</button>
                <button className="btn btn-primary mt-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mt-2" onClick={handleLoClick}>Convert to Lowercase</button>
                
                </div>
                <div className="summary my-4 container d-flex justify-content-center align-items-center">
                <p>Total Words - {countWords(text)}  and  Total characters - {text.length}</p>
                </div>

            </div>
        </div>
    )
}  
