// "use client"
import React from 'react'
import Image from 'next/image'

const CartModel = () => {

   const cartItems = true

  return (
   <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 bg-white top-12 right-0 flex flex-col gap-6'>
     {!cartItems ? (
        <div>Cart Is Empty</div>
     ) : (
        <>
        <h3 className='text-xl'>Shopping Cart</h3>
        {/* list */}
        <div className='flex flex-col gap-8'>
        <div className='flex gap-4'>
          <Image src="https://images.pexels.com/photos/23500777/pexels-photo-23500777/free-photo-of-a-close-up-of-a-cherry-blossom-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96} className='object-cover rounded-md'/>

          <div>
          {/* TOP */}
            <div className='flex flex-col justify-center w-full'>
                {/* TITLE   */}
                <div className='flex items-center justify-between gap-8'>
                    <h3 className='font-semibold '>Product Name</h3>
                    <div className='p-1 bg-gray-50 rounded-md'>$49</div>
                </div>
                {/* DESC */}
                <div className='text-sm text-gray-500'>
                     available
                </div>
            </div>
            {/* BOTTOM */}
            <div className='flex justify-between text-sm'>
              <span className='text-gray-500'>Qty. 2</span>
              <span className='text-blue-500'>remove</span>
            </div>
          </div>
        </div>
        
        </div>
        {/* bottom */}
        <div className=''>
          <div className='flex items-center justify-between font-semibold'>
            <span className=''>Subtotal</span>
            <span className=''>$49</span>
          </div>
          <p className='text-gray-500 text-sm mt-2 mb-4'>Shipping and taxes calculated at checkout</p>
          {/* BUTTONS */}
          <div className='flex  justify-between textt-sm'>
            <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
            <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
          </div>
        </div>
        </>
     )}
   </div>
  )
}

export default CartModel