"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const images =[
    
    {id:1,
     url:"https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {id:2,
     url:"https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {id:3,
     url:"https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {id:4,
     url:"https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
]

const ProductImages = () => {

const [index,setIndex] = useState(0)

  return (
    <div className=''>
      {/* 1.MAIN IMG   */}
      <div className='h-[500px] relative'>
         <Image src={images[index].url}
         alt=""
         fill
         sizes="50vw"
         className='object-cover rounded-md'/>
      </div>
      {/* 2.SMALL IMG */}
      <div className='flex justify-between gap-4 mt-8'>
        {images.map((img,i) => (
            <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={img.id} onClick={()=>setIndex(i)}>
            <Image src={img.url}
             alt=""
             fill
             sizes="30vw"
             className='object-cover rounded-md'/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages