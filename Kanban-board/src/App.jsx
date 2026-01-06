import { useState } from "react";
import TaskCard from "./components/TaskCard"
import { tasks as initialTasks, statuses } from './data/task-data'

function App() {

  const [ tasks, setTasks ] = useState(initialTasks); 
  const columns = statuses.map((status)=>
  { 
    const tasksInColumn = tasks.filter((task)=>task.status === status);
    return{
      status: status,
      tasks: tasksInColumn
    }
  })
  const updatedTaskPoints = ((tasktoupdate,newpoints)=>{
    if(newpoints < 0)
    return;
      setTasks((prev)=>
          prev.map((task)=>
            task.id === tasktoupdate.id?
            {
              ...task, points : newpoints
            }
          : task
          )
      )
    
  }
  )
  return (
    <div className="flex w-screen divide-x ">
        { columns.map((column)=>
        (
           <div className="flex-1" >
            <div className="flex justify-between text-3xl font-bold items-center mr-2" >  
            <h1 className="text-center font-bold p-4 uppercase text-2xl"  >{column.status}</h1>
            <h6>{column.tasks.reduce((sum,task)=>sum+task.points,0)}</h6>
            </div>
            <div>
              {column.tasks.map((task)=>
           (
            <TaskCard task={task} updateTaskPoints={updatedTaskPoints} />
           ))}
            </div>
           </div>
        )) }
    </div>
  )
}

export default App
