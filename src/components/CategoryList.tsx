import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
          
            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="20vw" className='object-cover'/>
                </div>
                <div className='mt-8 font-light tracking-wide '>
                  Category Name 
                </div>
             </Link>


            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="20vw" className='object-cover'/>
                </div>
                <div className='mt-8 font-light tracking-wide '>
                  Category Name 
                </div>
             </Link>
           
             <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="20vw" className='object-cover'/>
                </div>
                <div className='mt-8 font-light tracking-wide '>
                  Category Name 
                </div>
             </Link>


            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="20vw" className='object-cover'/>
                </div>
                <div className='mt-8 font-light tracking-wide '>
                  Category Name 
                </div>
             </Link>

             <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                    <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="20vw" className='object-cover'/>
                </div>
                <div className='mt-8 font-light tracking-wide '>
                  Category Name 
                </div>
             </Link>


            <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:1/4 xl:w-1/6">
                <div className='relative bg-slate-100 w-full h-96'>
                <Image src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes="20vw" className='object-cover'/>
                </div>
                <div className='mt-8 font-light tracking-wide '>
                  Category Name 
                </div>
             </Link>
           

        </div>
    </div>
  )
}

export default CategoryList