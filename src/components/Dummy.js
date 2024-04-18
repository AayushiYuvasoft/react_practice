import React, { useState } from 'react'
import image from "../assets/images/msd.jpg"
const Dummy = () => {
  const [imagewidh, setImagewidth] = useState(false)
  const [widths, setWidth] = useState(100)
  const handleMouse = () => {
    if (!imagewidh) {
      setWidth(500)
      setImagewidth(true);
    }
  }

  const handleMouseOut=()=>{
    if(imagewidh){
      setWidth(100)
      setImagewidth(false);

    }
  }

  const handleClick=()=>{
    console.log('hello')
  }
  const handleCopy = () => {
    alert('Text copied');
  };

  const handleCut = () => {
    alert('Text cut');
  };

  const handlePaste = () => {
    alert('Text pasted');
  };
  return (
    <div>
      <img src={image} alt='no-image' onMouseOver={handleMouse} width={`${widths}px`} onMouseOut={handleMouseOut} />
      <button onClick={handleClick} onDoubleClick={()=>alert("hello")}>Add</button>
      <input type='text' onFocus={()=>console.log("hii")} onBlur={()=>console.log("hello")} />
      <p onCopy={handleCopy} onCut={handleCut} onPaste={handlePaste}>Image : onMouseOver : when you hover on image. Image should increase in size. Think of any way where you can do it. Also, try that when you "move out" the mouse, it should be back to normal size.
Button : onDoubleClick: when you doubleClick a button. show some alert box. Also make a console.log for single click event. Is console.log printed twice on double click ? check this ?
Input Textbox : onFocus, onBlur are 2 events which occur when you enter or exit an input text box by click of mouse etc. Use it to display some console.log, which print "focused on the textbox", "out of textbox".
onCopy, onCut, onPaste are 3 events which you can use on any text value etc. try to use it on a paragraph and just alert the user that something is copied, cut or pasted.</p>
    </div>
  )
}

export default Dummy