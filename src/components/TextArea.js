import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextArea(props) {

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleUpClick = ()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLoClick = ()=>{
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  }

  const handleClear = ()=>{
    setText("");
    props.showAlert("Text Cleared", "success");
  }

  const [text, setText] = useState("Enter text here");

  return (
    <div className="full-hw" style={props.mode === 'light' ? {color: 'black', backgroundColor: 'white'} : {color: 'white', backgroundColor: '#212529', border: '1px white'}}>
  <div className="container">
    <h1>{props.title}</h1>
    <div className="mb-3">
    <label for="textBox"></label>
    <textarea class="form-control" value={text} onChange={handleOnChange} id="textBox" rows="6"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button type="button" className="btn btn-danger mx-1 my-1" onClick={handleClear}>Clear Text Box</button>
    <div className="container my-4">
      <h2>Your text summary.</h2>
      <p><strong>{text.split(" ").length === 1 ? 0 : text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters.</p>
      <p>Read in <strong>{text.length === 0 ? 0 : 0.008 * text.split(" ").length}</strong> minutes.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
    </div>
  )
}

TextArea.propTypes = {
    title: PropTypes.string.isRequired 
}

TextArea.defaultProps = {
    title : "Enter text"
}