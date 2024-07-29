import React from 'react'
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from '../../assets/logo.png'
import plogo from '../../assets/plogo.jpg'




function Navbar() {
    return (
        <>
            <div className='flex justify-between px-6 py-2'>

                <div className='flex items-center space-x-4 '>
                    {/* menubar and logo */}
                    <AiOutlineMenu className='text-xl cursor-pointer' />
                    <img src={logo} alt='' className='w-20 cursor-pointer' />
                </div>


                <div className=' flex w-[35%] items-center'>

                    <div className='w-[100%] px-3 py-2 border rounded-l-full'>
                        <input
                            type='text'
                            placeholder='search'
                            className='outline-none'
                        />
                    </div>

                    <button className='px-4 py-2  rounded-r-full bg-gray-100'>
                        <CiSearch size={"24px"} />
                    </button>

                    <IoMdMic size={"40px"} className='ml-3 border  p-2 cursor-pointer rounded-full 
                    hover:bg-gray-200 duration-200'/>

                </div>



                <div className='flex space-x-5 items-center'>
                <RiVideoAddLine className='text-2xl'/>
                <AiOutlineBell className='text-2xl'/>
                <Avatar src={plogo} alt='' size={"32"} round={true}/>
                </div>
            </div>

        </>
    )
}

export default Navbar
