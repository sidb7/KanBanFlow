import React from 'react'
import '../App.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import { useDrag } from 'react-dnd'
export default function Task({task,tasks,setTasks}) {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item:{id:task.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))


    const handleRemove =(id) =>
    {
        //console.log(id)
        const ftask = tasks.filter(t=>t.id!==id)
        setTasks(ftask)     
        toast("Task Removed",{icon:"⚠️"})
        localStorage.setItem("tasks",JSON.stringify(ftask))
    }
  return (
    <div ref={drag} style={{opacity: (isDragging)?0.5:""}} id='TaskContainer' className='w-100 fs-5 bg-light rounded-2 position-relative d-flex p-2 align-items-center my-2 ' >
  {task.name}
        
       
    <button onClick={()=>handleRemove(task.id)}  style={{backgroundColor:"rgba(250, 235, 215, 0)"}} className='  border-0 rounded-5 position-absolute end-0 p-0 me-2'><AiOutlineCloseCircle id='closeButton' size={20}/></button>
    </div>
  )
}
