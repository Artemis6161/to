import { useState } from 'react';
import './App.css';
import Inputarea from './component/inputarea';
import Todoitems from './component/Todoitems';

function App() {
  const [items,setItems] = useState([]);

  const addItems = (inputText) => {
    setItems((prevItems) => {
      return[...prevItems,inputText];
    });
  };
  const deleteItem = (id)=>{
    setItems((previtems)=>{
      return previtems.filter((item,index)=>{
        return index !== id;
      })

    }
    
    )
  }
  console.log(items);
  return (
    <div className="Container">
      <div className="heading">
     <h1>to-do List</h1>
    </div>
    <Inputarea addItems={addItems}/>
   <div>
    <ul>
      {items.map((item, index)=>{
          return <Todoitems key={index} text={item} deleteItem ={deleteItem} id={index}/>;
          })}
    </ul>
    </div>
    </div>
  );
}

export default App;
