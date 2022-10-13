import React, { useState } from 'react'
import './App.css';
function App() {

  const [inputList, setinputList] = useState("");
  const [item, setItem] = useState([]);

  const itemAdd = (e) => {
    setinputList(e.target.value);
  };

  const listOfItems = () => {

  };

  return (
    <>
      <div className="outerDiv">
        <div className="centerDiv">
          <br />
          <h2>ToDo List</h2>

          <div className="itemAdd">

            <input type="text" placeholder='Add item' onChange={itemAdd} />
            <button className="additionButton" onClick={listOfItems}> + </button>
          </div>

          <div className="mainArea">
            <ol>
              <li>
                {item.map((itemval) => {
                  return <li> {itemval}</li>
                })}
              </li>
            </ol>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
