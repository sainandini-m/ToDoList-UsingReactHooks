import React, { useState } from "react";


export default function Todolist(props){
    const [editingTask, setEditedTask] = useState(false);
    const [editedName, setEditedName] = useState('');

    function changedTask(e) {
        setEditedName(e.target.value);
    }

    function submitEditedTask(event) {
        event.preventDefault();
        props.editExistingTask(props.id, editedName);
        setEditedName("");
        setEditedTask(false);
    }

    const editTaskForm = (
        <form className="todoList" onSubmit={submitEditedTask} >
          <div >
          <input id={props.id} type="checkbox" onChange={()=>props.checkCompletedTasks(props.id)} defaultChecked={props.isCompleted} />
           <label htmlFor={props.id}>{props.task}</label>
           <br/>
            <label> Changed name for {props.name} </label>
            <input value={editedName} onChange={changedTask} id={props.id}  type="text" />
          </div>
          <div>
            <button type="button" onClick={() => setEditedTask(false)}> Cancel</button>
            <button type="submit" > Save </button>
          </div>
        </form>
      );
    
    const displayTaskForm=( 
        <React.Fragment>
         <div >
        <input id={props.id} type="checkbox" onChange={()=>props.checkCompletedTasks(props.id)} defaultChecked={props.isCompleted} />
        <label htmlFor={props.id}>{props.task}</label>
      </div>
      <div>
        <button type="button" onClick={() => setEditedTask(true)}>Edit {props.task} </button>
        <button type="button" onClick={() => props.deleteTask(props.id)} > Delete {props.task} </button>
      </div>
      </React.Fragment>
    );

    return <React.Fragment>
       <li>  {editingTask ? editTaskForm : displayTaskForm}  </li>
      </React.Fragment>
}