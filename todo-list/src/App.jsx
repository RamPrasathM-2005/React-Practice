import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  function handleInput(event) {
    setText(event.target.value);
  }

  function addToList() {
    if (text.trim() === '') return; 
    setList([
      ...list,
      {
        currentList: text,
        isMarked: false
      }
    ]);
    setText('');
  }

  function deleteList(val) {
    const updatedList = list.filter((value) => val !== value.currentList);
    setList(updatedList);
  }

  function handleMark(value) {
    const updatedList = list.map((val) => {
      if (val.currentList === value.currentList) {
        return {
          currentList: val.currentList,
          isMarked: true
        };
      } else {
        return val;
      }
    });
    setList(updatedList);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInput} />
      <button onClick={addToList}>Add</button>

      {list.map((value, index) => (
        <div key={index}>
          <p>{value.currentList}</p>
          <button onClick={() => deleteList(value.currentList)}>Delete</button>
          {value.isMarked ? (
            <button disabled>Marked</button>
          ) : (
            <button onClick={() => handleMark(value)}>Mark as Read</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
