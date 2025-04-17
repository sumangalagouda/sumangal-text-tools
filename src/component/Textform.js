import React, {useState} from 'react'

export default function TextForm(props) {

  const [text,setText]=useState('');
  
const handleUpClick=()=>{
  let newText=text.toUpperCase();
  setText(newText);
  props.showAlert("converted to uppercase","success")
}
const handleloClick=()=>{
  let newText=text.toLowerCase();
  setText(newText);
  props.showAlert("converted to lowercase","success")
}
const handleclearClick=()=>{
  let newText="";
  setText(newText);
  props.showAlert("cleared","success")
}
const handleCopy=()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("copied!","success")

}
const handleOnechange=(e)=>{
  setText(e.target.value);
}
  return (
    <>
    <div>
        <h1 className={` my-5 text-${props.mode==='light'?'black':'white'}`}>Enter the text here to analyze</h1>
  <div className="mb-3">
  <textarea className={`form-control bg-${props.mode==='light'?'white':'black'} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnechange} rows="3" placeholder="Enter your text here" ></textarea>
</div>
  <button className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>
  <button className="btn btn-primary mx-2" onClick={handleloClick}>convert to lower case</button>
  <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
</div>
<div className={`conatiner my-3 text-${props.mode==='light'?'dark':'light'}`} >
  <h3>your text summary</h3>
  <p>{text.split(" ").length-1} words and {text.length} letters</p>
  <p>{0.008* text.split(" ").length} Meinutes to read</p>
  <h3>preview</h3>
  <p>{text}</p>
</div>
    </>
  )
}
