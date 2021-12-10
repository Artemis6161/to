import React,{ useState } from 'react'

const Inputarea = (props) => {
const [inputText, setInputText] = useState("");
const handlechange = (event) => {
     setInputText(event.target.value);
};
  return (
    <div className="form">
        <input type="text" onChange={handlechange} value={inputText} />
        <button 
        onClick={() => {
            props.addItems(inputText);
            setInputText("");
        }}>
            <span>add</span>
            </button>
            </div>
  )
}

export default Inputarea;
