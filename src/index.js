import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/main.component'



let taskList  = [
  { id: 1, task: "test1", isCompleted: true },
  { id: 2, task: "test2", isCompleted: false },
  { id: 3, task: "test3", isCompleted: false },
  { id: 4, task: "test4", isCompleted: false },
  { id: 5, task: "test5", isCompleted: false }
];

ReactDOM.render(<MainApp tasks={taskList} />,document.getElementById('root'));


