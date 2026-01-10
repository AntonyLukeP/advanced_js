import { useState } from 'react'
export function useVirtualScroll(
    {
    itemCount,
    itemHeight,
    viewportHeight,
    overscan = 2
    }
)
{
    const [ scrollTop , setScrollTop ] = useState(0);

    const startIndex = Math.floot(scrollTop/itemHeight);

    const visibleItemCount = Math.ceil(viewportHeight/itemHeight)+overscan;

    const paddingTop = startIndex * itemHeight;
    const paddingbottom = (itemCount - (startIndex + visibleItemCount)) * itemHeight;

    function handleScroll(e)
    {
        setScrollTop(e.target.scrollTop);
    }

    return {
        startIndex,
        visibleItemCount,
        paddingTop,
        paddingbottom,
        handleScroll
    }
}