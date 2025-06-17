import React from 'react'
import { ShoppingBag, Search } from 'lucide-react';

function Navbar() {
    return (
        <div className='w-full flex justify-between  items-center'>
            <div className="text-red-500 font-bold text-3xl rotate-[-5deg] cursor-context-menu">SLAd</div>
            <ul className="flex text-sm justify-center items-center gap-15">
                <li className='cursor-pointer tracking-[1px] text-black'>Home</li>
                <li className='cursor-pointer tracking-[1px] text-black/50'>Shop</li>
                <li className='cursor-pointer tracking-[1px] text-black/50'>Recipy</li>
                <li className='cursor-pointer tracking-[1px] text-black/50'>Contact</li>
            </ul>
            <div className=" relative flex justify-center items-center gap-5"><Search size={18} className='cursor-pointer' /><ShoppingBag size={18} className='cursor-pointer' /></div>
        </div>
    )
}

export default Navbar