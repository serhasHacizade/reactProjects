import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
const App = () => {
  const [newItem, setNewItem] = useState("");
  const [itemsArray, setItemsArray] = useState([]);

  const addItem = () => {
    //this if statement control is item null
    if (!newItem) {
      alert("Enter a item");
      return;
    }
    //every items has a unique id
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }
    setItemsArray(prev => [...prev, item]);
    setNewItem("");
  }
  //this function is button function, thats delete item
  const deleteItem = id => {
    const newArray = itemsArray.filter(item => item.id !== id);
    setItemsArray(newArray)
  }
  //focus input when dom loaded
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("input").focus();
  })


  const handlekeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
      event.preventDefault();
      document.forms[0].reset();
    }
  };

  return (
    <div className="container">
      <h1>Todo List App with React</h1>
      <div className="content">
        <form >
          <input
            type="text"
            onChange={e => setNewItem(e.target.value)}
            className="input"
            placeholder={"type a item"}
            value = {newItem}
            onKeyDown={handlekeyDown} />
        </form>
        <button className="button" onClick={() => addItem()}>Add</button>
      </div>
      <div className="underline" />
      <AiFillDelete className="deleteList" onClick={() => setItemsArray([])}/>
      <ul>
        {
          itemsArray.map(item => {
            return (
              <li key={item.id}>{item.value} <AiFillDelete onClick={() => deleteItem(item.id)}>X</AiFillDelete></li>
            );
          })
        }
      </ul>
    </div>
  )
}
export default App;