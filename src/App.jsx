import React, { useEffect } from 'react'
import { UtensilsCrossed, ScrollText, Plus, Minus } from 'lucide-react';
import { toogle_sidebar , del , incr , decr } from './Features/Cart_reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import FoodModel from './BurgerModel'
import Header from './Header';

function App() {
  let side_bar = useSelector((state) => state.cart.sidebar)
  let cart = useSelector((state) => state.cart.items)
  let total_bill = useSelector((state) => state.cart.total_amount)

  let dispatch = useDispatch()
  return (
    <div className='w-full py-3 bg-white select-none'>

      <Header />

      <div className={`fixed top-0 right-0 bg-black/30 w-full transition-all duration-300 ease-linear h-screen z-20 ${side_bar ? "opacity-100 visible" : "opacity-0 invisible"} `} onClick={() => dispatch(toogle_sidebar())}></div>
      <div className={`fixed w-[300px] sm:w-[400px] p-4  h-screen bg-black transition-all duration-400 ease-in-out top-0 z-20 ${side_bar ? "right-0" : "right-[-405px]"} `}>
        <UtensilsCrossed strokeWidth={2} className='absolute top-4 active:scale-95 hover:text-red-500 transition-all duration-100 cursor-pointer right-4 text-white' onClick={() => dispatch(toogle_sidebar())} />
        <h1 className='text-white font-bold tracking-[2px] text-xl select-none'>Your Order :-  </h1>

        {
          cart.length === 0 ? (
            <>
              <div className='h-screen justify-center items-center gap-5 flex flex-col'>
                <ScrollText className='scale-200 text-white' />
                <p className=" text-xl sm:text-3xl capitalize text-white wt"> Your list is empty!</p>
                <p className="text-sm sm:text-md capitalize text-center text-white/60">Start adding delicious food to your order 🍔🍟</p>

                <div className="w-full h-[100px] flex items-center justify-center ">
                  <div className="w-full h-full max-w-5xl rounded-xl ">
                    <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[3, 2, 1]} intensity={1} />
                      <FoodModel scale={1} position={[0, -1, 0]} />
                      <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={3}
                        enablePan={false}
                      />
                      <Environment preset="sunset" />
                    </Canvas>
                  </div>
                </div>
                <h1 className='text-xl text-white wt'>Krabby Patty Burger</h1>
                <p className='text-md ty tracking-[2px]'>Comming Soon...</p>
              </div>
            </>
          ) : (

            <>
              <div className='flex select-none cursor-context-menu meal_anime items-center justify-center relative'>
                <div className='text-6xl text-white mt-3 text-center flex items-center justify-center gap-1'> 🍽   <p className='text-3xl'>🍹</p> </div>
                <p className='absolute text-3xl left-[35%] scale-90 sm:scale-100 sm:left-[39%] top-[35%]'>🍔</p>

              </div>

              <div className='w-full h-[350px] py-1 px-0 sm:px-3 crt_scroll mt-10 text-white'>

                {cart.map((ele, idx) => {
                  return (

                    <div key={idx} className='w-full hidden  h-[90px] hover:bg-white/25 transition-all duration-100 group ease-linear bg-white/20 rounded-lg mt-3 sm:flex relative justify-between px-3 items-center'>
                      <div className='absolute top-2 right-2 rotate-[45deg] cursor-pointer text-yellow-500 hover:text-red-500 active:scale-90 transition-all duration-100 ease-linear z-10' onClick={()=>dispatch(del(ele))}> <Plus /> </div>

                      <div className='w-[40px] sm:w-[70px] h-[40px] sm:h-[70px] rounded-lg'>
                        <img className='w-full h-full group-hover:scale-110 transition-all duration-200 ease-in' src={ele.img} alt="" />
                      </div>
                      <div className=' w-[240px] h-[80px] rounded-lg'>
                        <h1 className='text-white text-[12px] mt-2 font-bold'> {ele.name} </h1>
                        <p className='text-green-500 text-sm mt-1'>$ {ele.price} </p>
                        <div className='w-max flex justify-center items-center gap-2 mt-1'>
                          <Minus size={18} className='cursor-pointer text-white hover:text-red-400 active:scale-85 transition-all duration-75 ease-linear' onClick={()=>dispatch(decr(ele))} />
                          <p className='text-yellow-300 text-sm sm:text-md '> {ele.quantity} </p>
                          <Plus size={18} className='cursor-pointer text-white  hover:text-green-300 active:scale-85 transition-all duration-75 ease-linear' onClick={()=>dispatch(incr(ele))} />
                        </div>
                      </div>
                    </div>
                  )
                })}
                {
                  cart && cart.map((ele, idx) => {
                    return (

                      <div key={idx} className='block sm:hidden w-full group h-[90px]  mt-4 border-1 overflow-hidden rounded-lg mx-auto bg-cover bg-no-repeat bg-center relative'
                        style={{ backgroundImage: `url(${ele.img})` }}
                      >
                        <div className='absolute top-2 right-2 rotate-[45deg] cursor-pointer text-yellow-500 hover:text-red-500 active:scale-90 transition-all duration-100 ease-linear z-10'> <Plus /> </div>
                        <div className='absolute w-full h-full bg-black/80 group-hover:bg-black/75 transition-all duration-100 ease-in flex px-5 justify-center flex-col'>

                          <h1 className='text-[12px] text-white font-bold'> {ele.name} </h1>
                          <p className='mt-1 text-green-400'>$ {ele.price}</p>
                          <div className='w-max flex justify-center items-center gap-2 mt-1'>
                            <Minus size={18} className='cursor-pointer text-white hover:text-red-400 active:scale-85 transition-all duration-75 ease-linear' />
                            <p className='text-yellow-300 text-sm sm:text-md '> {ele.quantity} </p>
                            <Plus size={18} className='cursor-pointer text-white  hover:text-green-300 active:scale-85 transition-all duration-75 ease-linear' />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }


              </div>
              <div className='w-full h-[70px] bg-red-700 red_boxsh rounded-2xl mt-8 flex px-5 justify-between items-center'>
                <h1 className='text-xl text-white font-bold tracking-[1px]'>Total Bill :-</h1>
                <p className='text-md text-yellow-400 '> {total_bill} $ </p>
              </div>

            </>
          )}

        {/* /////////////// */}
      </div>

    </div>
  )
}

export default App