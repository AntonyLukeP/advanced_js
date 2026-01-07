import { useState } from "react";
import TaskCard from "./components/TaskCard"
import { tasks as initialTasks, statuses } from './data/task-data'
import { useEffect } from "react";

function App() {

  const [ tasks, setTasks ] = useState(()=>{
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : initialTasks;
  }); 

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])
  const columns = statuses.map((status)=>
  { 
    const tasksInColumn = tasks.filter((task)=>task.status === status);
    return{
      status: status,
      tasks: tasksInColumn
    }
  })
  const updatedTaskPoints = ((tasktoupdate,direction)=>{
    if(tasktoupdate.points < 0 || tasktoupdate.points > 13)
    return;

    const fib = [0,1,2,3,5,8,13];
    const index = fib.indexOf(tasktoupdate.points);
    const newIndex = direction === 'up' ? index+1 : index-1;
      setTasks((prev)=>
          prev.map((task)=>
            task.id === tasktoupdate.id?
            {
              ...task, points : fib[newIndex] || 0
            }
          : task
          )
      )
    
  }
  )

  const updateTaskTitle = (tasktoupdate, newTitle)=>{
    setTasks((prev)=>
      prev.map((task)=>
        task.id === tasktoupdate.id?
        {
          ...task, title: newTitle
        }
        : task
      )
    )
  }
    // change status when dropped
    const handleDrop = (e,newStatus)=>
    {
        const id = e.dataTransfer.getData("id");
        setTasks((prev)=>
        prev.map((task)=>
          task.id === id?
          {
            ...task, status: newStatus
          }
          : task
        )
        )
    }
  return (
    <div className="flex w-screen divide-x ">
        { columns.map((column)=>
        (
           <div className="flex-1" 
           onDragOver={(e)=>e.preventDefault()}
           onDrop={(e)=>handleDrop(e,column.status)}
           >
            <div className="flex justify-between text-3xl font-bold items-center mr-2" >  
            <h1 className="text-center font-bold p-4 uppercase text-2xl"  >{column.status}</h1>
            <h6>{column.tasks.reduce((sum,task)=>sum+task.points,0)}</h6>
            </div>
            <div>
              {column.tasks.map((task)=>
           (
            <TaskCard task={task} updateTaskPoints={updatedTaskPoints} updateTaskTitle={updateTaskTitle} />
           ))}
            </div>
           </div>
        )) }
    </div>
  )
}

export default App
