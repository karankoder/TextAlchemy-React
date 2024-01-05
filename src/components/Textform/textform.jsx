import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState("");
    const handleUpClick=()=>{
        let uptext=text.toUpperCase();
        settext(uptext);
        props.modifyAlert("Converted to Uppercase!","success");
    }
    const handleLoClick=()=>{
        let uptext=text.toLowerCase();
        settext(uptext);
        props.modifyAlert("Converted to Lowercase!","success")
    }
    const handleClear=()=>{
        settext("");
        props.modifyAlert("Text Cleared Succesfully!","success")
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
        props.modifyAlert("Text copied to clipboard","success")
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
                <label for="exampleFormControlTextarea1" className="form-label" style={{ fontSize: '35px', color:props.mode==="light"?"black":"white"}} >Enter the text to analyze</label>
                <textarea className="form-control"  onChange={handleOnChange} placeholder="Enter text here" value={text} id="exampleFormControlTextarea1 textCopy" rows="13" style={{ width: '100%' , fontSize:20, backgroundColor:props.mode==="light"?"white":"#5C4E4D",color:props.mode==="light"?"black":"white"}}></textarea>
                <div className="buttons container d-flex justify-content-between align-items-center">
                <button className={`btn btn-${props.mode==="light"?"primary":"dark"} mt-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode==="light"?"primary":"dark"} mt-2`} onClick={handleClear}>Clear Text</button>
                <button className={`btn btn-${props.mode==="light"?"primary":"dark"} mt-2`} onClick={handleSpaces}>Remove extra spaces</button>
                <button className={`btn btn-${props.mode==="light"?"primary":"dark"} mt-2`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.mode==="light"?"primary":"dark"} mt-2`} onClick={handleLoClick}>Convert to Lowercase</button>
                </div>
                <div className="summary my-4 container d-flex justify-content-center align-items-center">
                <p style={{color:props.mode==="light"?"black":"white"}}>Total Words - {countWords(text)}  and  Total characters - {text.length}</p>
                </div>

            </div>
        </div>
    )
}  
