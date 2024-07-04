import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=' py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mt-24 text-sm bg-gray-100'>
      {/* TOP  */}
      <div className=' flex flex-col md:flex-row justify-between gap-24'>
         {/* LEFT  */}
         <div className='w-full lg:w-1/2 xl:w-1/4 flex flex-col gap-8'>
         <Link href="/">
         <div className='text-2xl tracking-wide'>ChaR</div>
         </Link>
         <p>
          100 Mount Road,IT Park,Chennai,Tamil Nadu
         </p>
         <span>hello@charu.mathi</span>
         <span>+91 9345579514</span>
         <div className='flex gap-6'>
          <Image src="/facebook.png" alt="" width={16} height={16}></Image>
          <Image src="/instagram.png" alt="" width={16} height={16}></Image>
          <Image src="/youtube.png" alt="" width={16} height={16}></Image>
          <Image src="/pinterest.png" alt="" width={16} height={16}></Image>
          <Image src="/x.png" alt="" width={16} height={16}></Image>
         </div>
         </div>
         {/* CENTER  */}
         <div className='hidden lg:flex justify-between w-1/2  '>

         <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-lg'>COMPANY</h1>
          <div className='flex flex-col gap-6'>
            <Link href="">About Us</Link>
            <Link href="">Careers</Link>
            <Link href="">Affiliates</Link>
            <Link href="">Blog</Link>
            <Link href="">Contact</Link>
          </div>
         </div>
         
         <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-lg'>SHOP</h1>
          <div className='flex flex-col gap-6'>
            <Link href="">New Arrivals</Link>
            <Link href="">Accessories</Link>
            <Link href="">Men</Link>
            <Link href="">Women</Link>
            <Link href="">All Products</Link>
          </div>
         </div>


         <div className='flex flex-col justify-between'>
          <h1 className='font-medium text-lg'>HELP</h1>
          <div className='flex flex-col gap-6'>
            <Link href="">Customer Service</Link>
            <Link href="">My Account</Link>
            <Link href="">Find a Store</Link>
            <Link href="">Legal & Privacy</Link>
            <Link href="">Gift Card</Link>
          </div>
         </div>


         </div>
         {/* RIGHT */}
         <div className='w-full lg:w-1/2 xl:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends , promotions, and much more!
          </p>
          <div className='flex'>
            <input type="text"
            placeholder='Email address'
            className='p-4 w-3/4' />
            <button className='w-1/4 bg-cpink text-white '>JOIN</button>
          </div>
            <span className='font-semibold'>Secure Payments</span>
            <div className='flex justify-between'>
              <Image src="/discover.png" alt="" width={40} height={20}/>
              <Image src="/skrill.png" alt="" width={40} height={20}/>
              <Image src="/paypal.png" alt="" width={40} height={20}/>
              <Image src="/mastercard.png" alt="" width={40} height={20}/>
              <Image src="/visa.png" alt="" width={40} height={20}/>
           </div>
         </div>


      </div>
    
      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
           <div className=''>@ 2023 Charu Shop</div>
           <div className='flex flex-col gap-8 md:flex-row '>
            <div className=''>
              <span className='text-gray-500'>Languages</span>
              <span className='font-medium'>United States | English</span>
            </div>
            <div className=''>
              <span className='text-gray-500'>Currency</span>
              <span className='font-medium'>$ USD</span>
            </div>
           </div>

      </div>
    </div>
  )
}

export default Footer