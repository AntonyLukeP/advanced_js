import { useVirtualScroll } from '../hooks/useVirtualScroll';

const itemHeight = 40;
const viewportHeight = 400;

const VirtualisedList = ({items}) => {

    const {
    startIndex,
    visibleItemCount,
    paddingTop,
    paddingBottom,
    onScroll,
  } = useVirtualScroll({
    itemCount: items.length,
    itemHeight,
    viewportHeight,
  });
   

    const visibleItems = items.slice(startIndex, startIndex+visibleItemCount);

  return (
    <div
     className='  flex flex-col items-center h-screen justify-center '
    >

        <div className=' h-[400px] w-[400px] overflow-y-auto border-4
         border-gray-500 rounded-2xl' 
        onScroll={onScroll} 
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