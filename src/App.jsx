import React from 'react'
import Navbar from './Navbar'
import { UtensilsCrossed } from 'lucide-react';
import { toogle_sidebar } from './Features/Cart_reducer';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';

function App() {
  let side_bar = useSelector((state) => state.cart.sidebar)
  let dispatch = useDispatch()
  return (
    <div className='w-full py-4 px-20 bg-white'>
      <Navbar />
      <Header/>
      
          <div className={`fixed top-0 right-0 bg-black/30 w-full transition-all duration-300 ease-linear h-screen ${side_bar ? "opacity-100 visible" : "opacity-0 invisible"} `} onClick={() => dispatch(toogle_sidebar())}></div>
          <div className={`fixed w-[350px] p-4  h-screen bg-black transition-all duration-300 ease-in-out top-0 z-10 ${side_bar ? "right-0" : "right-[-355px]"} `}>
            <UtensilsCrossed strokeWidth={2} className='absolute top-4 active:scale-95 hover:text-red-500 transition-all duration-100 cursor-pointer right-4 text-white' onClick={() => dispatch(toogle_sidebar())} />
            <h1 className='text-white font-bold tracking-[2px] text-xl select-none'>Your Order :-  </h1>
            <div className='flex select-none cursor-context-menu meal_anime items-center justify-center relative'>
              <p className='text-6xl text-white mt-3 text-center flex items-center justify-center gap-1'> 🍽   <p className='text-3xl'>🍹</p> </p>
              <p className='absolute text-3xl left-[37.3%] top-[35%]'>🍔</p>

            </div>

            <div className='w-full h-[350px] crt_scroll mt-10 border text-white'>

            </div>
            <div className='w-full h-[70px] bg-red-700 red_boxsh rounded-2xl mt-8'></div>
          </div>
        
    </div>
  )
}

export default App