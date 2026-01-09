import React, { useState } from 'react'

const itemHeight = 40;
const veiwportHeight = 400;

const VirtualisedList = ({items}) => {

    const [scrollTop, setScrollTop] = useState(0);

    const startIndex = Math.floor(scrollTop/itemHeight);
    const visibleItemCount = Math.ceil(veiwportHeight/itemHeight)+2;

    const visibleItems = items.slice(startIndex, startIndex+visibleItemCount);

    
    const paddingTop = startIndex * itemHeight;
    const paddingBottom =
        (items.length - (startIndex + visibleItemCount)) * itemHeight;

  return (
    <div
     className='  flex flex-col items-center h-screen justify-center '
    >

        <div className=' h-[400px] w-[400px] overflow-y-auto border-4
         border-gray-500 rounded-2xl' 
        onScroll={(e)=>setScrollTop(e.target.scrollTop)} 
        >
            
        <div
          style={{
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${paddingBottom}px`,
          }}
        >
             {visibleItems.map((item)=>(
            <div key={item.id}
             className="border-b  text-center  h-[40px] p-[8px]"  >
                {item.name}</div>
        ) )}

           </div>


        </div>
    </div>
  )
}

export default VirtualisedList