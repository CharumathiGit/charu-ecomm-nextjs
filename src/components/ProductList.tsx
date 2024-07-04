import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <div className='relative w-full h-80'>
            <Image src="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity  duration-500' />
            <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
            className='absolute object-cover rounded-md ' />
          </div>
          
          {/* PRODUCT NAME,AMT DIV */}
          <div className='flex justify-between'>
            <span className='font-medium'>
              Product Name
            </span>
            <span className='font-semibold'>
              $49
            </span>
          </div>
          <div className='text-sm text-gray-500'>My description</div>
          <button className='rounded-2xl ring-1 ring-cpink text-cpink w-max py-2 px-4 text-xs hover:bg-cpink hover:text-white'>
            Add To Cart
          </button>
        </Link>
      {/* DUPPU 1*/}
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <div className='relative w-full h-80'>
            <Image src="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity  duration-500' />
            <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
            className='absolute object-cover rounded-md ' />
          </div>

          {/* PRODUCT NAME,AMT DIV */}
          <div className='flex justify-between'>
            <span className='font-medium'>
              Product Name
            </span>
            <span className='font-semibold'>
              $49
            </span>
          </div>
          <div className='text-sm text-gray-500'>My description</div>
          <button className='rounded-2xl ring-1 ring-cpink text-cpink w-max py-2 px-4 text-xs hover:bg-cpink hover:text-white'>
            Add To Cart
          </button>
       </Link>
      {/* DUPPU 2*/}
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <div className='relative w-full h-80'>
            <Image src="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity  duration-500' />
            <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
            className='absolute object-cover rounded-md ' />
          </div>

          {/* PRODUCT NAME,AMT DIV */}
          <div className='flex justify-between'>
            <span className='font-medium'>
              Product Name
            </span>
            <span className='font-semibold'>
              $49
            </span>
          </div>
          <div className='text-sm text-gray-500'>My description</div>
          <button className='rounded-2xl ring-1 ring-cpink text-cpink w-max py-2 px-4 text-xs hover:bg-cpink hover:text-white'>
            Add To Cart
          </button>
       </Link>
      {/* DUPPU 3*/}
        <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
          <div className='relative w-full h-80'>
            <Image src="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity  duration-500' />
            <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="25vw"
            className='absolute object-cover rounded-md ' />
          </div>

          {/* PRODUCT NAME,AMT DIV */}
          <div className='flex justify-between'>
            <span className='font-medium'>
              Product Name
            </span>
            <span className='font-semibold'>
              $49
            </span>
          </div>
          <div className='text-sm text-gray-500'>My description</div>
          <button className='rounded-2xl ring-1 ring-cpink text-cpink w-max py-2 px-4 text-xs hover:bg-cpink hover:text-white'>
            Add To Cart
          </button>
     </Link>
    </div>
  )
}

export default ProductList