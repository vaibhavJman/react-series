import React, { useEffect, useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  // text = "New Text";     //Wrong way to update state
  // setText("New Text");   //Correct way to update state

  const handleUpClick = () => {
    // console.log("Uppercase button is clicked", text.toUpperCase());
    setText(text.toUpperCase());
  };

  const handleLowerClick = () => {
    // console.log("LowerCase button is clicked", text.toLowerCase());
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    // console.log(event);
    setText(event.target.value);
  };

  const handleClearText = (event) => {
    // console.log("On Change");
    setText("");
  };

  return (
    <>
      <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === "dark" ? "#343a40" : "white", color:  props.mode === "dark" ? "white" : "black"}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}> Convert to Lowercase</button>
        <button className="btn btn-primary " onClick={handleClearText}>Clear Text</button>
      </div>

      <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h2>Your Text Summary</h2>
        <p> <b>{text.split(" ").length} </b> words, <b> {text.length} </b>characters</p>
        <p> <b>{0.008 * text.split(" ").length}</b> Minutes read. </p>
        <h2>Preview</h2>
        <p> {text.length > 0? text : "Enter something in the above textbox to preview."} </p>
      </div>
    </>
  );
}

export default TextForm;
