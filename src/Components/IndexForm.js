import React,{useState} from 'react'

export default function TextForm(props) {
    
    const HandleUPclick=()=>{
        //console.log("UpperCase Was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase" , "success");
    }
    const HandleLoclick=()=>{
        //console.log("LowerCase Was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" converted to Lowerrcase","success");
    }
    const HandleClearclick=()=>{
        //console.log("Clear Was Clicked"+text);
        let newText=" ";
        setText(newText);
        props.showAlert("Cleared","success");
    }
    const HandleTrimclick=()=>{
        //console.log("Clear Was Clicked"+text);
        let newText=text.trim();
        setText(newText);
        props.showAlert("Trim ","success");
    }
    const HandleCopyclick=()=>{
        let text=document.getElementById("MyBox");
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard","success");
    }
    const HandleSpaceclick=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Space clicked","success");
    }

    const HandleOnchange=(event)=>{
       // console.log("On change");
        setText(event.target.value);

    }
    const [text, setText] = useState("Enter Your Text Here");
       return (
        <>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="MyBox" className="form-label">TextBox</label>
<textarea className="form-control" value={text} onChange={HandleOnchange} 
style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} 
id="MyBox" rows="8"></textarea>
</div>
<button type="button" className="btn btn-secondary mx-3" onClick={HandleUPclick}>convert UpperCase</button>
<button type="button" className="btn btn-primary mx-3" onClick={HandleLoclick}>convert LowerCase</button>
<button type="button" className="btn btn-warning mx-3" onClick={HandleClearclick}>Clear</button>
<button type="button" className="btn btn-dark mx-3" onClick={HandleTrimclick}>Trim</button>
<button type="button" className="btn btn-success mx-3" onClick={HandleCopyclick}>Copy Clipboard</button>
<button type="button" className="btn btn-success" onClick={HandleSpaceclick}>Remove Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary..!</h2>
        <p>{text.trim().split(/\S+/).length - 1} words and {text.trim().length} char</p>
        <p>{0.008*text.split(" ").length} Minuites read</p>
        <h3> Preview</h3>
        <p>{text.length>0?text:"Enter The The Something To Preview...!"}</p>
    </div>
    </>
  )
}

