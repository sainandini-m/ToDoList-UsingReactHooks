import React, { useState , useRef} from "react";
import Todolist from "./todolist.component"
import FormComp from "./form.components"
import "./toDoList.css"; 

export default function MainApp(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [todos2, setTodos2] = React.useState([]);
  const [todos1, setTodos1] = React.useState([]);

  let task1;

  function addTask(task) {
    const updatedTask = { id:tasks.length+1 , task: task, isCompleted: false };
    setTasks([...tasks, updatedTask]);
    //appending a new task in the task list
  }

  function deleteTask(id) {
   // console.log(tasks);
    const afterDeletingTasks = tasks.filter(task => id !== task.id); //remove the items which 
    //does not match the id and return the matching ones 
    setTasks(afterDeletingTasks);
  }

  function editExistingTask(id,updatedTaskName){
    const editedTaskList = tasks.map(task => {
        if (id === task.id) {
          return {...task, task: updatedTaskName}
        }
        else{
          return task;
        } 
      });
      setTasks(editedTaskList);

  }

 

  function showCompleted(){
    let todosUpdated1 = tasks.filter((task) => task.isCompleted);
    setTodos1(todosUpdated1);
    console.log(todosUpdated1);
    hideButton("btn2");
  }

  function checkCompletedTasks(id) {
    const updatedCheckedTasks = tasks.map(singleTask => {
      if (id === singleTask.id) {
        return {...singleTask, isCompleted: !singleTask.isCompleted} //iterating the whole
        //task object and then changing the value of completed
      }
      else{
         return singleTask;
      }
    });
    setTasks(updatedCheckedTasks)
  }

  let taskList;
  const taskListLength=tasks.length;

  const btn0 = useRef(null);
  const btn1 = useRef(null);
  const btn2 = useRef(null);

  function showActive(){
    let  todosUpdated = tasks.filter((task) => !task.isCompleted);
    setTodos2(todosUpdated);
    console.log(todosUpdated);
    hideButton("btn1");
  } 
  
  function showAll(){
    setComponent( tasks.map((task) => <Todolist key={task.id}  editExistingTask={editExistingTask}
    deleteTask={deleteTask}  checkCompletedTasks={checkCompletedTasks} id={task.id} 
    task= {task.task} isCompleted={task.isCompleted}  />))
    console.log(component1)
  }

  const [component1, setComponent] = useState([])

  const hideButton=(btnName)=>{
    console.log(btnName);
    switch (btnName) {
      case "btn1":
       setComponent( todos2.map((task) => <Todolist key={task.id}  editExistingTask={editExistingTask}
           deleteTask={deleteTask}  checkCompletedTasks={checkCompletedTasks} id={task.id} 
           task= {task.task} isCompleted={task.isCompleted}  />));
        console.log(component1)
        break;
      case "btn2":
        setComponent( todos1.map((task) => <Todolist key={task.id}  editExistingTask={editExistingTask}
        deleteTask={deleteTask}  checkCompletedTasks={checkCompletedTasks} id={task.id} 
        task= {task.task} isCompleted={task.isCompleted}  />));
       console.log(component1)
        break;
      default: alert("Click Button");
    }
  }

  return <React.Fragment>
        <div className="todoList"  >
        <h1>TodoMatic</h1>
        <FormComp onTaskSubmit={addTask} />      
        <div>
        <button ref= {btn0} onClick={showAll}>Show All Tasks</button>
        <button ref= {btn1} onClick={showActive}>Show Active Tasks</button>
        <button ref= {btn2} onClick={showCompleted} >Show Completed Tasks</button>
        </div>
        <h2>{taskListLength} tasks remaining</h2>
        <ul >
         {component1}
        </ul>
        </div>
        </React.Fragment>
}