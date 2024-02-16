import React from 'react'
import Subheading from './Subheading'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Date from '../assets/icons/Date';
import Findicon from '../assets/icons/Findicon';

function SearchBar({className}) {
  return (
    <div className={`w-[1328px] h-[176px] px-[71px] bg-white rounded-2xl flex items-center ${className}`}>
        <div className="">
            <span className='before:w-[120px] before:bg-[#f5d223] before:h-2 before:content-normal before:absolute before:-bottom-6 before:-z-1 relative'><Subheading text='Location' className='text-black text-[28px] font-poppins font-semibold '/></span>
            <form className="flex items-center gap-10">
              <select name="Location"  className="underline py-2 bg-white font-poppins font-normal text-[18px] text-[#99A3AD]  " id="Location">
                <option selected >Enter your destination</option>
                <option value='london' >London</option>
                <option value='greece' >Greece</option>
              </select>
              <CiLocationOn className='text-3xl text-black me-10'/>
            </form>
        </div>
        <div className="border-x-2 ps-14">
            <span className='before:w-[110px] before:bg-[#f5d223] before:h-2 before:content-normal before:absolute before:-bottom-6 before:-z-1 relative'><Subheading text='Activity' className='text-black text-[28px] font-poppins font-semibold '/></span>
            <form className="flex items-center gap-10">
              <select name="Location"  className="underline py-2 bg-white font-poppins font-normal text-[18px] text-[#99A3AD]  " id="Location">
                <option selected >Bungee Jump</option>
                <option value='sky diving' >Sky diving</option>
                <option value='horse riding' >Horse riding</option>
              </select>
              <MdOutlineArrowDropDownCircle className='text-3xl text-black/70 me-10'/>
            </form>
        </div>
        <div className="ps-14 me-10">
            <span className='before:w-[70px] before:bg-[#f5d223] before:h-2 before:content-normal before:absolute before:-bottom-6 before:-z-1 relative'><Subheading text='Date' className='text-black text-[28px] font-poppins font-semibold '/></span>
            <form className="flex items-center">
              <input type="datetime" placeholder='See date' className='underline py-2 bg-white font-poppins font-normal text-[18px] text-[#99A3AD] w-64 outline-none' name="" id="" />
              <Date className='text-3xl text-black/70'/>
            </form>
        </div>
        <div className='w-full flex justify-end'>
        <Findicon />
        </div>
    </div>
  )
}

export default SearchBar