import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import "../App.css"
export default function CreateTasks({tasks,setTasks}) {

    const [task,setTask] =useState({

        id:"",
        name:"",
        status: "todo"

    })
   console.log(tasks)

const updateSubmit=(e)=>
{
    e.preventDefault();
    if(task.name.length<3) return toast.error("A task must have more than 3 characters")
    if(task.name.length>100) return toast.error("Toast must be less than 100 characters")

    setTasks((prev)=>
    {
        if(Array.isArray(prev))
        {
            const List =[...prev,task]
            localStorage.setItem("tasks",JSON.stringify(List));
           return List; 
        }
        else
        {
            const List =[task]
            localStorage.setItem("tasks",JSON.stringify(List));
           return List; 
        }
      
    })
    toast.success("Task Created")
    setTask({
        id:"",
        name:"",
        status: "todo"

    })

   }

    
  return (
    <form className='text-center w-50 mt-5  d-flex gap-2 m-3 m-auto' >
<input  id='SearchInput'
    onChange={e=>setTask({...task,id: uuidv4() ,name:e.target.value})}
    value={task.name}
type="text" placeholder='Create a new task'  className='border-2 w-100 fs-5 border-secondary rounded-5 px-3'/>


<button onClick={updateSubmit} className='btn btn-danger fs-5 '>Create</button>
    </form>
  )
}
