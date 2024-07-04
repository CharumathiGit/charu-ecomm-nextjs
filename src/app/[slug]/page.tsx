import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const Singlepage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16'>

     {/* 1.IMG   */}
     <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
      <ProductImages/>
     </div>
     
     {/* 2.TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
      
      <h1 className='text-4xl font-medium'>Product Name</h1>

      <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, animi. Magni labore fuga vitae sit cumque, pariatur consequatur eius fugiat atque accusamus sequi veritatis excepturi?</p>

      {/* for thin lines  */}
      <div className='h-[2px] bg-gray-100'/>

      <div className='flex items-center gap-4'>
        <h1 className='text-xl text-gray-500 line-through'>$59</h1>
        <h2 className='font-medium text-2xl'>$49</h2>
      </div>

      <div className='h-[2px] bg-gray-100'/>

      {/* To customize the prd color and all */}
      <CustomizeProducts/>

      {/* To add the prdt qty */}
      <Add/>
      
     {/* then samaple 3 para with h4 */}
      <div className='h-[2px] bg-gray-100'/>

      <div className='text-sm'>
        <h4 className='font-medium mb-4'>Title
          
        </h4>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum fugit, aut repudiandae rerum error iste quod. Rerum dolore commodi laborum vel minima quae nesciunt.</p>
      </div>


      <div className='text-sm'>
        <h4 className='font-medium mb-4'>Title

        </h4>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum fugit, aut repudiandae rerum error iste quod. Rerum dolore commodi laborum vel minima quae nesciunt.</p>
      </div>


      <div className='text-sm'>
        <h4 className='font-medium mb-4'>Title

        </h4>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum fugit, aut repudiandae rerum error iste quod. Rerum dolore commodi laborum vel minima quae nesciunt.</p>
      </div>

      </div>
     
     </div>
  )
}

export default Singlepage