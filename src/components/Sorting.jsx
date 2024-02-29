import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

function Sorting() {

    const [open, setOpen] = useState(false)
  return (
    <div className='w-40 font-poppins font-semibold text-[18px] text-[#212529] bg-white'>
        <div className="flex justify-between items-center cursor-pointer" onClick={()=> setOpen(!open)}>
        Most popular
        <IoIosArrowDown className={`${open? "rotate-180" : "rotate-0"}`}/>
        </div>
        <ul className={`mt-2 shadow-2xl absolute bg-white 
        ${open? 
        "block"
        : "hidden"}`}>
            <li className='p-1 hover:bg-sky-600 hover:text-white duration-700 cursor-pointer'>Lowest To High</li>
            <li className='p-1 hover:bg-sky-600 hover:text-white duration-700 cursor-pointer'>Highest To Low</li>
        </ul>

    </div>
  )
}

export default Sorting