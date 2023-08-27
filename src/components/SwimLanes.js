import React from 'react'
import Header from './Header'
import Task from './Task'
import "../App.css"
import {  useDrop } from 'react-dnd'
import { toast } from 'react-hot-toast'
import { icons } from 'react-icons'

export default function SwimLanes({status,index, tasks, setTasks,  todos , inProgress, completed}) {

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop:(item)=>addItemToSwimLane(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))


    let text= "To do"
    let bg  = "primary"
    let tasksTOMap =  todos

    if(status==="inprogress")
    {
      text = "In Progress"
      bg = "warning"
      tasksTOMap = inProgress 
    }

    if(status==="completed")
    {
      text = "Completed"
      bg = "success"
      tasksTOMap =completed
    }

    const addItemToSwimLane=(id)=>
    {
      //console.log("dropped",id,status)
      setTasks(prev=>
        {
          const mtask = prev.map(t=>{
            if(t.id===id)
            {
              return {...t,status:status}
            }
            return t
          })
          localStorage.setItem("tasks",JSON.stringify(mtask))
          toast.success("Task status changed")
          return mtask
        
        })
      
    }

  return (
    <>
    <div ref={drop} id='ListContainer' className= {`p-0 col-lg-3 col-10 rounded-3  border-${bg}  fs-4 `}  style={{border:"2px solid ",scale: (isOver)?"1.02":"1",boxShadow:(isOver)?"1px 1px 10px rgba(0, 0, 0, 0.448)":"" ,transition:"all 0.2s"}}>
   
   <Header text={text} bg={bg} count={tasksTOMap.length} />

      <div  className='d-flex flex-column justify-content-center p-3' > 
        
        {tasksTOMap.length>0 && tasksTOMap.map(task=> <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />)}
        
      </div>
    </div>

    </>
  )
}
