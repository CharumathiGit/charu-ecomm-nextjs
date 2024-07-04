"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CartModel from './CartModel'

const NavIcons = () => {

    const [isProfileOpen,setIsProfileOpen] = useState(false)
    const [isCartOpen,setIsCartOpen] = useState(false)

    const router = useRouter()

    //TEMPORARY
    const isloggedIn =true

    const handleProfile =()=>{
        if(!isloggedIn){
            router.push("/login");
        }
        // so now its loggedIn then i set my profile
        setIsProfileOpen((prev)=>!prev)
        //after loggedIn false to true my profileOpen then isProfileOpen is open if u again click it will close
    }
  return ( 
   
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      
       {/* PROFILE  */}
        <Image src="/profile.png" alt="" width={22} height={22} className='cursor-pointer'
        onClick={handleProfile}
        />

{isProfileOpen && (
            <div className='absolute p-4 left-0 top-12 rounded-md text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
                <Link href="/">Profile
                </Link>
                <div className='mt-2 cursor-pointer'>Logout</div>
            </div>
        )}

         {/* NOTIFICATION */}
        <Image src="/notification.png" alt="" width={22} height={22} className='cursor-pointer'/>


         {/* CART */}
        <div className='cursor-pointer
        relative' onClick={()=> setIsCartOpen((prev) => !prev)}>
        <Image src="/cart.png" alt="" width={22} height={22}  
      />
      <div className='absolute -top-4 -right-4 w-6 h-6 bg-cpink rounded-full text-center text-white text-sm flex items-center justify-center'>2</div>
        </div>
     {isCartOpen && (
        <CartModel/>
     )}
       
    </div>
  )
}

export default NavIcons