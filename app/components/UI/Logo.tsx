import React from 'react'
import { LuLoaderPinwheel } from "react-icons/lu";

const Logo = () => {
  return (
    <div className='flex items-center justify-center gap-2 text-blue-500'>
        <LuLoaderPinwheel size={22} />
        <span className='font-bold'>SPINCYCLE</span>
    </div>
  )
}

export default Logo