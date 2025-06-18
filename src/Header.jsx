import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import cabbage from './images/freepik__transparent-salad-cabbage__81821-removebg-preview.png';
import material from './Data';
import roast from "./images/roast-removebg-preview.png"


function Header() {

    let data = material || null

    let [anim, setanim] = useState(false)
    let [anime2, setanime2] = useState(false)
    let [anime3, setanime3] = useState(false)
    let [anime4, setanime4] = useState(false)

    let [opt, setopt] = useState({
        id: 1,
        name: "🍗 Rustic Chicken Royale",
        img: roast,
        info: "A royal fusion of flavors featuring a tender grilled chicken leg, spiced tikka chunks, seasoned baby potatoes with green peas, and a side of fresh garden salad — all served on a single rustic platter. Perfectly balanced, delightfully hearty.",
        price: 3.67,
        index: 0
    })

    useEffect(() => {
        let timer = setTimeout(() => {
            setanim(true);
            setanime2(true)
            setanime3(true)
            setanime4(true)
        }, 500);
        return () => clearTimeout(timer)
    }, [anim])


    function active(obj, num) {
        setanim(false)
        setanime2(false)
        setanime3(false)
        setanime4(false)

        setTimeout(() => {
            setopt({ ...obj, index: num });
        }, 200);

    }

    return (
        <div className='w-full'>
            <div className='w-[900px] h-[900px] rounded-full fixed top-[-115px] flex justify-center items-center right-[-23%] border-2 border-dashed border-black/20'>
                {data && data.map(((ele, idx) => {
                    return (
                        <div key={idx} className={`w-[130px] active:scale-90 flex justify-center items-center grey_sh h-[130px] absolute rounded-full hover:bg-red-700 transition-all duration-150 ease-in cursor-pointer opt_div z-20 ${opt.index == idx ? "bg-red-700" : "bg-white"} `} onClick={() => active(ele, idx)}>
                            <img className={`w-full scale-80 `} src={ele.img} alt="" /> </div>
                    )
                }))}
                <div className='w-[80%] h-[80%] flex items-center relative '>
                    <div className=' rounded-full w-full h-full rot absolute bg-black left bg-no-repeat bg-center bg-contain blackboxsh'
                        style={{ backgroundImage: `url(${cabbage})`, backgroundPositionX: "30px", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} ></div>
                    <img className={` transition-all duration-200 ease-in-out ${anime2 ? "rotate-0 opacity-100 scale-100 translate-x-0" : "rotate-90 opacity-0 scale-80 translate-x-50"}  w-[420px] ml-20 up_down2`} src={opt.img} alt="" />
                </div>
            </div>
            <Navbar />
            <div className={`w-[700px] mt-30 flex flex-col gap-5 justify-center pl-20     `} >
                <h1 className={` transition-all duration-200 ease-in-out ${anim ? "opacity-100 translate-y-0 " : "opacity-0 -translate-y-10"} text-3xl font-bold`}> {opt.name} </h1>
                <h1 className={` transition-all duration-200 ease-in-out ${anime2 ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-10"} text-3xl font-bold text-red-600`}>{opt.price} $</h1>
                <p className={` transition-all duration-200 ease-in-out ${anime2 ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-10"} text-md text-black/60`}>{opt.info}</p>
                <button className={`py-2 px-4 w-max bg-black rounded-xl text-white text-xl border border-transparent transition-all duration-200 ease-in hover:bg-white hover:border-black hover:text-black active:scale-95 cursor-pointer ${anime2 ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-10"} `}>Order Now</button>
            </div>
            <div className='m-0 h-max w-max pl-20'>
                <div className='w-[100px] h-[2px] mt-15 bg-black/50 inline-block -translate-y-1'></div> <p className='text-black inline-block font-bold'>Stay Healthy</p>
            </div>
            <div className='pl-65 h-max w-max mt-[-30px]'>
                <p className='text-black inline-block font-bold'>Stay Safe</p> <div className='w-[100px] h-[2px] mt-15 bg-black/50 inline-block -translate-y-1'></div>
            </div>
        </div>
    )
}

export default Header