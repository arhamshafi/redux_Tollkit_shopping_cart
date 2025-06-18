import React from 'react'
import { ShoppingBag, Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toogle_sidebar } from './Features/Cart_reducer';
import logo from "./images/chef-cozinheiros-cociner-tela-pinterest-clip-art-32.png"

function Navbar() {

    let dispatch = useDispatch();
    return (
        <div className='w-full flex justify-between  items-center'>
            <div className="w-[40px] scale-130 rotate-[-5deg] cursor-context-menu "><img src={logo} alt="" /></div>
            <ul className="flex text-sm justify-center items-center gap-15">
                <li className='cursor-pointer tracking-[1px] text-black'>Home</li>
                <li className='cursor-pointer tracking-[1px] text-black/50'>Shop</li>
                <li className='cursor-pointer tracking-[1px] text-black/50'>Recipy</li>
                <li className='cursor-pointer tracking-[1px] text-black/50'>Contact</li>
            </ul>
            <div className=" relative flex justify-center items-center gap-5"><Search size={18} className='cursor-pointer' />
                <ShoppingBag size={18} className='cursor-pointer active:scale-95 transition-all duration-100 ' onClick={() => dispatch(toogle_sidebar())} />
                <div className='w-[8px] h-[8px] bg-red-500 rounded-full absolute right-[-1px] top-0 popup'></div>
            </div>
        </div>
    )
}

export default Navbar