import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("uppercase was clicked" );
        let newText = text.toUpperCase();
        props.showAlert("Converted to upper case","success");

        // console.log(newText);
        setText(newText);

    }
    const handleDownClick=()=>{
        // console.log("uppercase was clicked" );
        let newText = text.toLowerCase();
        props.showAlert("Converted to lower case","success");

        // console.log(newText);
        setText(newText);
    }
    const handleClear=()=>{
        let newText = "";
        // console.log(newText);
        props.showAlert("Text box cleared","success");
        setText(newText);
    }
    const handleCapitalizeClick=()=>{
        // console.log("Capitalize was clicked" );
        // logic 1)
    
        let newText = text.toLowerCase().split(' ').map((word)=>{
            return word[0].toUpperCase()+word.substring(1)
            }).join(' ');
       props.showAlert("Converted to capitalize","success");
        //logic 2)
        // only do first letter 
        // let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        // console.log(newText);
        setText(newText);
    }
    const handleCopyClick =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
       props.showAlert("Copy to clipboard","success");

    }
    const handleExtraSpace=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
       props.showAlert("Removed extra spaces","success");
    }
    const handleOnChange=(e)=>{
        // console.log("on changed");
        setText(e.target.value);
    }
    const[text,setText] = useState(""); 
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    return (
            <>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
               <h1>{props.heading}</h1> 
            <div className="mb-3 ">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'gray':'white' , color:props.mode==='dark'?'white':'black' }} id="myBox" value={text} onChange={handleOnChange}  placeholder= "enter your text" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleDownClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleCapitalizeClick}>Convert to Capetalize</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleCopyClick}>Copy</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpace}>Remove Extra space</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length<=1?text.trim().split(/[ ]+/).length -1 :text.trim().split(/[ ]+/).length} words and {text.trim().length} characters</b></p>
                <p>{0.008*text.split(/\s+/).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter some text in above textbox to see preview'}</p>
            </div>
            </>
    )
}
