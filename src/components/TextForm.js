import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpperClick = () => {
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("All letters are Uppertext", "success")

  } 

  const handleLowerClick = () => {
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("All letters are Lowertext", "success")
  }

  const handleClear = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Cleared", "success")

  }

  const [copyBtnText, setCopyBtnText] = useState('Copy');

  const handleCopy = () => {
   var text = document.getElementById('textAreaID');
   text.select();
   navigator.clipboard.writeText(text.value)

   setCopyBtnText('copied to Clipboard!')
   props.showAlert("Copied!", "success")

  }

  const handleChange = (event) => {
      setText(event.target.value)
  }
  
  const [text, setText] = useState();

//   let textSplit = text.split(" ");

  return (
      <>  
      <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <h1 className="text-center">{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode === 'dark' ? '#00091d' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="textAreaID" rows="7" placeholder="Enter your message"></textarea>
          </div>
          <button className="btn btn-primary my-3 " onClick={handleUpperClick}>Uppercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleLowerClick}>Lowercase</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear</button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>{copyBtnText}</button>
      </div>
      <div className="container my-3">
        {/* <h5>Your Summary: </h5>
        <p> {text.split(" ").length} words and {text.length} characters</p> 
        <p> {0.08 * text.split(" ").length} Minutes to Read</p>  */}

      </div>

      
      </>
  )
}


