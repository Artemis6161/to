import React,{ useState, useRef, useEffect } from 'react'
const Inputarea = (props) => {
const [inputText, setInputText] = useState("");
const inputEl = useRef(null);
const handlechange = (event) => {
     setInputText(event.target.value);
};
console.log(inputEl);
useEffect(() => {
  console.log("this is componentDidMount");
  console.log(inputEl);
  inputEl.current.focus();
 
}, []);
  return (
    <div className="form">
        <input type="text" onChange={handlechange} value={inputText} ref={inputEl}/>
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
