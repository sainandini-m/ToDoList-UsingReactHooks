import React, { useState } from "react";

export default function FormComp(props){

    const [task, setTask] = useState('');

    function onType(event){
        setTask(event.target.value)
    }

    function formSubmit(event){
        event.preventDefault();
        if(!task==''){
            props.onTaskSubmit(task);
            setTask("");
        }
        else{
            alert("Enter your task")
        }
    }

    return <React.Fragment>
            <form onSubmit={formSubmit}>
                <h2><label htmlFor="tasks"> What needs to be done?</label></h2>
                <input value={task} onChange={(event)=>onType(event)} type="text" name="text"/>
                <button> Add</button>
            </form>
           </React.Fragment>
}