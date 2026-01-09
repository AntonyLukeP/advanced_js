import React from 'react'

const VirtualisedList = ({items}) => {
  return (
    <div
     className='  flex items-center h-screen justify-center '
    >
        <div className=' h-[400px] w-[400px] overflow-y-auto border-4 border-gray-500 rounded-2xl' >
            {items.map((item)=>(
            <div key={item.id}
             className='border-b  text-center  h-[40px] p-[8px] '  >
                {item.name}</div>
        ) )}
        </div>
    </div>
  )
}

export default VirtualisedList