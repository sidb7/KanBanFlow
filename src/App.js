
import { useEffect, useState } from 'react';
import './App.css';
import CreateTasks from './components/CreateTasks';
import ListTasks from './components/ListTasks';
import  { Toaster } from 'react-hot-toast';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {

  const [tasks,setTasks] = useState([])
// console.log(tasks)

useEffect(()=>
{
  setTasks(JSON.parse(localStorage.getItem("tasks")))
},[])

  return (
   <DndProvider backend={HTML5Backend}>
    
  <div className='position-relative  d-flex justify-content-center vh-100 w-100 '>
    <Toaster/>
    <div div className='w-100 pt-3 mt-5' >
    <CreateTasks tasks={tasks} setTasks={setTasks} />
    <ListTasks tasks={tasks} setTasks={setTasks}/></div>

  </div>
   
  <div id='BackDrop'></div>
  </DndProvider>
  );
}

export default App;
