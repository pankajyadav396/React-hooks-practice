import React, { useState } from 'react'
useState
const Usingstate = () => {
    const [click, setClick] = useState(0);
    const [show, setShow] = useState(false);
    const [color, setColor] = useState('#000000')
    return (
        <div className=' flex items-center justify-center flex-col '>
            <p className='mt-4 text-center'>You clicked {click} times</p>
            <div>
                <button className=' mt-4 bg-red-700 text-white px-5 py-2 text-xl' onClick={() => setClick(click + 1)}>
                    Click
                </button>
            </div>

            <button className=' bg-red-700 text-white px-5 py-3 mt-5' onClick={() => setShow(!show)}>{show ? "Hide  " : "Show"}</button>

            {show ? <div className=' mt-5 relative opacity-100 duration-300 bg-red-500 h-[160px] px-14 py-10'>
                <p className=' text-white text-2xl'>This is showing</p>
            </div> : ""}
            <p className=' text-black text-3xl'>Color Picker</p>
            <input type="Color" onChange={(e) => setColor(e.target.value)} />
            <p style={{ color: color }}>{color}</p>
            <div style={{ backgroundColor: color }} className=' w-[500px] h-[140px]'></div>
        </div >
    )
}

export default Usingstate