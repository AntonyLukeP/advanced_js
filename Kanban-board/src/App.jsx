import TaskCard from "./components/TaskCard"
import { tasks, statuses } from './data/task-data'

function App() {

  const columns = statuses.map((status)=>
  { 
    const tasksInColumn = tasks.filter((task)=>task.status === status);
    return{
      status: status,
      tasks: tasksInColumn
    }
  })
  return (
    <div className="flex w-screen divide-x ">
        { columns.map((column)=>
        (
           <div className="flex-1" >
            <h1 className="text-center font-bold p-4 uppercase text-2xl"  >{column.status}</h1>
           {column.tasks.map((task)=>
           (
            <TaskCard task={task} />
           ))}
           </div>
        )) }
    </div>
  )
}

export default App
