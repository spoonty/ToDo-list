import React from 'react';
import './App.css';
import TasksBoardContainer from './Components/TasksBoardContainer';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TasksBoardContainer />
    </div>
  );
}

export default App;
