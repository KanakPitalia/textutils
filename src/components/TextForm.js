import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const toUpperCase = () => {
        let p = text.toUpperCase();
        // console.log(p);
        setText(p);
    }
    const toLowerCase = () => {
        let p = text.toLowerCase();
        // console.log(p);
        setText(p);
    }
    const toCapitalize = () => {
        let p = text.charAt(0);
        console.log(p);
        let str = p.toUpperCase() + text.substring(1, text.length).toLowerCase();
        console.log(str);
        setText(str);
    }

    const CopyText = () => {
        var text = document.getElementById("textArea");
        text.select();
        // let tex = window.getSelection();
        navigator.clipboard.writeText(text.value);
    }

    const ExtraSpaces = () => {
        // console.log(text);
        // let str = text.toString();
        // console.log(str);
        let reg = /\s+/;
        let str = text.trim().split(reg);
        setText(str.join(" "))
        // console.log(str);
    }

    const Clear = () => {
        // let tex = document.getElementById("textArea");
        // let tex = "";
        setText("");
    }

    const onChange = (event) => {
        // console.log(e.target.value);
        setText(event.target.value);
    }

    return (
        <>

            <h1 >Enter your text here</h1>
            <div className="form-group" >
    
                <textarea className="form-control" style={props.mode == "dark" ? {backgroundColor:"rgb(25 28 32)",color:"white"} : {backgroundColor:"white",color:"black"}} id="textArea" rows="8" value={text} onChange={onChange}></textarea>
            </div>

            <button type="button" className="btn btn-outline-primary m-3" onClick={toCapitalize}>Capitalize sentence</button>
            <button type="button" className="btn btn-outline-primary m-3" onClick={toUpperCase}>To UpperCase</button>
            <button type="button" className="btn btn-outline-primary m-3" onClick={toLowerCase}>To LowerCase</button>
            <button type="button" className="btn btn-outline-primary m-3" onClick={CopyText}>Copy Text</button>
            <button type="button" className="btn btn-outline-primary m-3" onClick={ExtraSpaces}>Remove extra spaces</button>
            <button type="button" className="btn btn-outline-primary m-3" onClick={Clear}>Clear</button>

            <h4 >Total Words : {text.split(" ") == "" ? 0 : text.trim().split(" ").length}</h4>
            <span><h4 >Total Characters : {text.length}</h4></span>

        </>
    );
}