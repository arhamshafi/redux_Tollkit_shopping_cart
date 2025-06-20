import React, { useEffect } from 'react'
import { UtensilsCrossed, ScrollText } from 'lucide-react';
import { toogle_sidebar } from './Features/Cart_reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import FoodModel from './BurgerModel'
import Header from './Header';

function App() {
  let side_bar = useSelector((state) => state.cart.sidebar)
  let cart = useSelector((state) => state.cart.items)

  let dispatch = useDispatch()
  return (
    <div className='w-full py-3 bg-white select-none'>

      <Header />

      <div className={`fixed top-0 right-0 bg-black/30 w-full transition-all duration-300 ease-linear h-screen z-20 ${side_bar ? "opacity-100 visible" : "opacity-0 invisible"} `} onClick={() => dispatch(toogle_sidebar())}></div>
      <div className={`fixed w-[400px] p-4  h-screen bg-black transition-all duration-400 ease-in-out top-0 z-20 ${side_bar ? "right-0" : "right-[-405px]"} `}>
        <UtensilsCrossed strokeWidth={2} className='absolute top-4 active:scale-95 hover:text-red-500 transition-all duration-100 cursor-pointer right-4 text-white' onClick={() => dispatch(toogle_sidebar())} />
        <h1 className='text-white font-bold tracking-[2px] text-xl select-none'>Your Order :-  </h1>

        {
          cart.length === 0 ? (
            <>
              <div className='h-screen justify-center items-center gap-5 flex flex-col'>
                <ScrollText className='scale-200 text-white' />
                <p className="text-3xl capitalize text-white wt"> Your list is empty!</p>
                <p className="text-md capitalize text-center text-white/60">Start adding delicious food to your order 🍔🍟</p>

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
                <p className='absolute text-3xl left-[37.3%] top-[35%]'>🍔</p>

              </div>

              <div className='w-full h-[350px] crt_scroll mt-10 border text-white'>

              </div>
              <div className='w-full h-[70px] bg-red-700 red_boxsh rounded-2xl mt-8'></div>

            </>
          )}

        {/* /////////////// */}
      </div>

    </div>
  )
}

export default App