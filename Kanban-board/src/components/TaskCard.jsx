import React from 'react'

import  high  from "../assets/high.png"
import  medium  from "../assets/medium.png"
import  low  from "../assets/low.png"
import { useState } from 'react'

const TaskCard = ({task,updateTaskPoints,updateTaskTitle} ) => {

    const [isEditingTitle, setIsEditingtitle] = useState(false);
    
  return (
    <div className='border rounded-lg px-2 m-2 bg-gray-50'
    draggable
    onDragStart={(e)=>{
        e.dataTransfer.setData("id", task.id);
    }}
    >
        <div className='text-base font-semibold py-2 ' >
            {isEditingTitle?
            ( 
                <input
                value={task.title}
                className='w-full p-2'
                onChange={(e)=> updateTaskTitle(task,e.target.value)}
                autoFocus
                onBlur={()=>setIsEditingtitle(false)}
                onKeyDown={(e)=>{
                    if(e.key == "Enter")
                        setIsEditingtitle(false);
                }
            }
                />
            )
            :
            (
                <div className='p-2' onClick={()=> setIsEditingtitle(true)} >{task.title}</div>
            )    
        }
        </div>
        <div className='flex gap-4 justify-between p-2 text-gray-700' >
            <div className='flex gap-2' >
                <span>
                {task.id}
            </span>
            <span>{task.priority}</span>
            {task.priority === 'high' && <img src={high} alt="high" className='inline w-8' /> }
            {task.priority === 'medium' && <img src={medium} alt="medium" className='inline w-8' /> }
            {task.priority === 'low' && <img src={low} alt="low" className='inline w-8' /> }
            </div>
            <div className='flex gap-2 items-center' >
                <button onClick={()=>updateTaskPoints(task,"down")} >-</button>
                <span className='font-bold' >{task.points}</span>
                <button onClick={()=>updateTaskPoints(task,"up")} >+</button>
            </div>
        </div>

    </div>
  )
}

export default TaskCard