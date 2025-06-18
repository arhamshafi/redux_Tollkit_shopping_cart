import React from 'react'
import { ShoppingBag, Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toogle_sidebar } from './Features/Cart_reducer';
import logo from "./images/chef-cozinheiros-cociner-tela-pinterest-clip-art-32.png"

function Navbar() {

    let dispatch = useDispatch();
    return (
        <div className='w-full flex justify-between  items-center'>
            <div className="w-[40px] scale-130 rotate-[-5deg] chef cursor-context-menu "><img src={logo} alt="" /></div>
            <ul className="flex text-sm justify-center items-center gap-15 up_down">
                <li className='relative cursor-pointer tracking-[1px] group text-black'>Home <div className='h-[2px] rounded-md w-full transition-all duration-150 ease-in bg-red-500 absolute bottom-0 left-0'></div></li>
                <li className='relative cursor-pointer tracking-[1px] group text-black/50'>Shop <div className='w-[0px] h-[2px] rounded-md group-hover:w-full transition-all duration-150 ease-in bg-red-500 absolute bottom-0 left-0'></div></li>
                <li className='relative cursor-pointer tracking-[1px] group text-black/50'>Recipy <div className='w-[0px] h-[2px] rounded-md group-hover:w-full transition-all duration-150 ease-in bg-red-500 absolute bottom-0 left-0'></div></li>
                <li className='relative cursor-pointer tracking-[1px] group text-black/50'>Contact <div className='w-[0px] h-[2px] rounded-md group-hover:w-full transition-all duration-150 ease-in bg-red-500 absolute bottom-0 left-0'></div></li>
            </ul>
            <div className=" relative flex justify-center items-center chef2 gap-5"><Search size={18} className='cursor-pointer' />
                <ShoppingBag size={18} className='cursor-pointer active:scale-95 transition-all duration-100 ' onClick={() => dispatch(toogle_sidebar())} />
                <div className='w-[8px] h-[8px] bg-red-500 rounded-full absolute right-[-1px] top-0 popup'></div>
            </div>
        </div>
    )
}

export default Navbar