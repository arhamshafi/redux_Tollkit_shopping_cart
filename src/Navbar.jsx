import React from 'react'
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toogle_sidebar } from './Features/Cart_reducer';
import logo from "./images/chef-cozinheiros-cociner-tela-pinterest-clip-art-32.png"

function Navbar() {

    let dispatch = useDispatch();
    let cartLength = useSelector((state) => state.cart.items.length);
    return (
        <div className='w-full flex justify-between px-3 sm:px-8 lg:px-15 items-center fixed top-4 bg-transparent  left-0 z-20'>
            <div className="w-[40px] scale-130 rotate-[-5deg] chef cursor-context-menu "><img className='drop-shadow-sm' src={logo} alt="" /></div>
            <ul className=" text-sm justify-center items-center gap-15 up_down hidden lg:flex">
                <li className='relative cursor-pointer tracking-[1px] group text-black'>Home <div className='h-[2px] rounded-md w-full transition-all duration-150 ease-in bg-red-500 absolute bottom-0 left-0'></div></li>
                <li className='relative cursor-pointer tracking-[1px] group text-black/50'>Shop <div className='w-[0px] h-[2px] rounded-md group-hover:w-full transition-all duration-150 ease-in bg-red-500 absolute bottom-0 left-0'></div></li>
                <li className='relative cursor-pointer tracking-[1px] group text-black/50'>Recipy <div className='w-[0px] h-[2px] rounded-md group-hover:w-full transition-all duration-150 ease-in bg-red-500 absolute bottom-0 left-0'></div></li>
                <li className='relative cursor-pointer tracking-[1px] group text-black/50'>Contact <div className='w-[0px] h-[2px] rounded-md group-hover:w-full transition-all duration-150 ease-in bg-red-500 absolute bottom-0 left-0'></div></li>
            </ul>

            <div className='flex chef2 justify-center items-center gap-3'>
                <Menu className='hidden sm:block lg:hidden cursor-pointer n_i ' />
                <div className=" relative flex justify-center  text-black xl:text-white items-center  gap-5"><Search size={18} className='cursor-pointer hidden sm:block' strokeWidth={3} />
                    <ShoppingBag strokeWidth={3} size={18} className=' cursor-pointer active:scale-95 transition-all duration-100 ' onClick={() => dispatch(toogle_sidebar())} />
                    {
                        cartLength !== 0 && (
                            <>
                                <div className='w-[7px] h-[7px] bg-red-500 rounded-full doot absolute right-[-1px] top-0 popup'></div>
                                <div className='w-[7px] h-[7px] bg-red-500 dotanime rounded-full doot absolute right-[-1px] top-0 popup'></div>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar