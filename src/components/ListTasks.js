import React, { useEffect, useState } from 'react'
import SwimLanes from './SwimLanes'

export default function ListTasks({tasks,setTasks}) {

    const [todos,setTodos] =useState([])
    const [inProgress,setInProgress] = useState([])
    const [completed,setCompleted] =useState([])

useEffect(()=>
{
  if(Array.isArray(tasks))
  {


    const ftodos =  tasks.filter(task=>task.status==="todo")
    const fInProgress =  tasks.filter(task=>task.status==="inprogress")
    const fCompleted =  tasks.filter(task=>task.status==="completed")
      setTodos(ftodos)
      setInProgress(fInProgress)
      setCompleted(fCompleted)  }
},[tasks])

const statuses = ["todo","inprogress","completed"]

  return (

   
    <div className='text-center d-flex flex-lg-row  flex-column justify-content-center '>
        {
            statuses.map((status,index)=>
            <SwimLanes key={index} status={status} index={index} tasks={tasks} setTasks={setTasks} 
                todos = {todos} inProgress={inProgress} completed={completed}
            /> 
            )
        }

    </div>
  )
}
