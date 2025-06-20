import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import cabbage from './images/freepik__transparent-salad-cabbage__81821-removebg-preview.png';
import material from './Data';
import roast from "./images/roast-removebg-preview.png"
import { useDispatch, useSelector } from 'react-redux';
import { Add_to_cart } from './Features/Cart_reducer';


function Header() {

    let data = material || null

    let [anim, setanim] = useState(false)
    let [anime2, setanime2] = useState(false)
    let dispatch = useDispatch()
    let cart = useSelector((state) => state.cart.items)
    console.log(cart);
    

    let [opt, setopt] = useState({
        id: 1,
        name: "🍗 Rustic Chicken Royale",
        img: roast,
        info: "A royal fusion of flavors featuring a tender grilled chicken leg, spiced tikka chunks, seasoned baby potatoes with green peas, and a side of fresh garden salad — all served on a single rustic platter. Perfectly balanced, delightfully hearty.",
        price: 3.67,
        index: 0,
        quantity: 1
    })

    useEffect(() => {
        let timer = setTimeout(() => {
            setanim(true);
            setanime2(true)
        }, 500);
        return () => clearTimeout(timer)
    }, [anim])


    function active(obj, num) {
        setanim(false)
        setanime2(false)

        setTimeout(() => {
            setopt({ ...obj, index: num });
        }, 200);
    }

    let mobileClass = anime2
        ? "opacity-100 rotate-0 translate-y-0 scale-100"
        : "-translate-y-20 opacity-0 scale-40 rotate-180"

    let smClass = anime2
        ? "sm:opacity-100 sm:rotate-0 sm:scale-100 sm:translate-y-0"
        : "sm:opacity-0 sm:scale-40 sm:rotate-180 sm:translate-y-0"

    return (
        <div className='w-full py-1'>
            <div className=" hidden sm:block lg:hidden mt-15 text-xl text-center tt tracking-[0.2em] text-black select-none  uppercase">
                Designed with <span className="text-red-600 rt font-bold">UX&nbsp;|&nbsp;ARHAM</span>
            </div>
            <div className='w-[800px] h-[800px] scale-80 dish xl:w-[900px] xl:h-[900px] rounded-full hidden fixed top-[-10%] xl:top-[-35%] lg:flex justify-center items-center right-[-30%] xl:right-[-28%] border-2 border-dashed border-black/20'>
                {data && data.map(((ele, idx) => {
                    return (
                        <div key={idx} className={`w-[130px] active:scale-90 flex justify-center items-center grey_sh h-[130px] absolute rounded-full hover:bg-red-700 transition-all duration-150 ease-in cursor-pointer opt_div z-20 ${opt.index == idx ? "bg-red-700" : "bg-gray-100"} `} onClick={() => active(ele, idx)}>
                            <img className={`w-full scale-80`} src={ele.img} alt="" /></div>
                    )
                }))}

                <div className='w-[80%] h-[80%] flex items-center relative '>
                    <div className=' rounded-full w-full h-full rot absolute bg-black left bg-no-repeat bg-center bg-contain blackboxsh'
                        style={{ backgroundImage: `url(${cabbage})`, backgroundPositionX: "30px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} ></div>
                    <img className={` transition-all duration-200 ease-in-out ${anime2 ? "rotate-0 opacity-100 scale-100 translate-x-0" : "rotate-90 opacity-0 scale-80 translate-x-50"} w-[280px] xl:w-[380px] ml-23 xl:ml-10 mt-10 xl:mt-20 up_down2`} src={opt.img} alt="" />
                </div>
            </div>
            <Navbar />

            <div className='w-full sm:w-[85%] h-[max] mx-auto py-2 mt-[-40%] dd sm:mt-5 block lg:hidden'>

                <div className='w-[450px] dish2 sm:w-[300px] h-[450px] sm:h-[300px] rounded-full relative border sm:border-0 border-dashed mx-auto flex justify-center items-center'>
                    <div className=' bg-black w-[80%] sm:w-full blackboxsh h-[80%] sm:h-full rounded-full absolute top-[10%] sm:top-0 left-[10%] sm:left-0  rot'
                        style={{ backgroundImage: `url(${cabbage})`, backgroundPositionX: "30px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                    ></div>
                    <img
                        className={`transition-all duration-200 ease-in-out mt-[25%] sm:mt-0 w-[30%] ind sm:w-[50%] up_down2 ${mobileClass} ${smClass}`}
                        src={opt.img}
                        alt=""
                    />

                    {data && data.map(((ele, idx) => {
                        return (
                            <div key={idx} className={`w-[80px] sm:hidden active:scale-90 flex justify-center items-center grey_sh h-[80px] absolute rounded-full hover:bg-red-700 transition-all duration-150 ease-in cursor-pointer opt_div-${idx} z-20 ${opt.index == idx ? "bg-red-700" : "bg-gray-100"} `} onClick={() => active(ele, idx)}>
                                <img className={`w-full scale-80`} src={ele.img} alt="" /></div>
                        )
                    }))}
                </div>

                <div className='w-full h-max mt-10 flex justify-evenly items-center'>
                    {data && data.map(((ele, idx) => {
                        return (
                            <div key={idx} className={`w-[100px] hidden active:scale-90 sm:flex justify-center up_down2 items-center grey_sh h-[100px] rounded-full hover:bg-red-700 transition-all duration-150 ease-in cursor-pointer ${opt.index == idx ? "bg-red-700" : "bg-gray-100"} `} onClick={() => active(ele, idx)}>
                                <img className={`w-full scale-80`} src={ele.img} alt="" /></div>
                        )
                    }))}
                </div>
            </div>

            <div className={`w-[80%] sm:w-[80%] cont lg:w-[650px] xl:w-[700px] h-[max] lg:h-[580px] xl:h-[610px] mt-5 sm:mt-10 lg:mt-0 flex flex-col gap-5 xl:gap-7 justify-center pl-4 sm:pl-10 transition-all duration-150 ease-linear relative  `} >
                <div className="absolute top-27 hidden lg:block left-10 ui_text text-xl tt tracking-[0.2em] text-black select-none  uppercase">
                    Designed with <span className="text-red-600 rt font-bold">UX&nbsp;|&nbsp;ARHAM</span>
                </div>
                <h1 className={` transition-all duration-200 ease-in-out ${anim ? "opacity-100 translate-y-0 " : "opacity-0 -translate-y-10"} mt-0 lg:mt-10 text-lg sm:text-3xl font-bold tt`}> {opt.name} </h1>
                <h1 className={` transition-all duration-200 ease-in-out ${anime2 ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-10"} text-lg sm:text-3xl font-bold text-red-600 rt`}>{opt.price} $</h1>
                <p className={` transition-all duration-200 ease-in-out ${anime2 ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-10"} text-[13px] sm:text-lg text-black/60`}>{opt.info}</p>
                <button className={`py-2 px-4 w-max bg-black rounded-xl text-white text-sm sm:text-xl border border-transparent transition-all duration-200 ease-in hover:bg-white hover:border-black hover:text-black active:scale-95 cursor-pointer
                     ${anime2 ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-10"} `} onClick={()=>dispatch(Add_to_cart(opt))} >Order Now</button>

                <div className='m-0 h-max absolute w-max bottom-15 left-10 lg:block hidden'>
                    <div className='w-[100px] h-[2px] mt-15 bg-black/50 inline-block -translate-y-1'></div> <p className='text-black inline-block font-bold'>Stay Healthy</p>
                </div>
                <div className='h-max w-max mt-[-30px] absolute bottom-5 left-50 lg:block hidden'>
                    <p className='text-black inline-block font-bold'>Stay Safe</p> <div className='w-[100px] h-[2px] mt-15 bg-black/50 inline-block -translate-y-1'></div>
                </div>
            </div>
            <div className="block sm:hidden mt-10 text-sm text-center sig tt tracking-[0.2em] text-black select-none  uppercase">
                Designed with <span className="text-red-600 rt underline font-bold">UX&nbsp;|&nbsp;ARHAM</span>
            </div>
        </div>
    )
}

export default Header