import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My List</h1>
      <div className='todo-Wrapper'>
        <div className='todo-input'>
          <div className="todo-input-item">
            <label>Title</label>
            <input type='text' placeholder='Enter the task'></input>
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input type='text' placeholder='Enter the description'></input>
          </div>
          <div className="todo-input-item">
            <button type='button' className='primaryBtn'>Add</button>
          </div>
        </div>
        <div>
          <div className='btn-area'> 
            <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} 
            onClick={() => setIsCompleteScreen(false)}>Todo</button>
            <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} 
            onClick={() => setIsCompleteScreen(true)}>Completed</button>
          </div>
          <div className='todo-list'>
            <div className='todo-list-item'>
              <h3>Task1</h3>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
