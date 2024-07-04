import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col gap-6'>

        {/* 1.Color */}
        <h4 className='font-medium'>Choose a color</h4>
       <ul className='flex items-center gap-3'>
        {/* gray circle */}
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>

          {/* Selected ring outer ring */}
          <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>

        </li>
        {/* NOT SELECTED ONE */}
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500'></li>

        
          {/* that out of stock color strike */}
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500'>

          <div className='absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>

        </li>
       </ul>

        {/* 2.Sizes */}
        <h4 className='font-medium'>Choose a sizes</h4>
        {/* not selected one */}
       <ul className='flex items-center gap-3'>
        
        <li className='ring-1 ring-cpink text-cpink rounded-md px-4 py-1 text-sm cursor-pointer'>Small</li>

        {/* selected one */}
        <li className='ring-1 ring-cpink text-white bg-cpink rounded-md px-4 py-1 text-sm cursor-pointer'>Medium</li>

        {/* not available sizes */}
        <li className='ring-1 ring-pink-200 text-white bg-pink-200 rounded-md px-4 py-1 text-sm cursor-pointer'>Large</li>
       </ul>

   </div>
  )
}

export default CustomizeProducts