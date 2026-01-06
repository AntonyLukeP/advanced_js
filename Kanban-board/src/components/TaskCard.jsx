import React from 'react'

import  high  from "../assets/high.png"
import  medium  from "../assets/medium.png"
import  low  from "../assets/low.png"

const TaskCard = ({task,updateTaskPoints} ) => {
    const points = task.points
  return (
    <div className='border rounded-lg px-2 m-2 bg-gray-50' >
        <div className='text-base font-semibold py-2' >
            {task.title}
        </div>
        <div className='flex gap-4 justify-between py-2 text-gray-700' >
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
                <button onClick={()=>updateTaskPoints(task,points-1)} >-</button>
                <span className='font-bold' >{task.points}</span>
                <button onClick={()=>updateTaskPoints(task,points+1)} >+</button>
            </div>
        </div>

    </div>
  )
}

export default TaskCard