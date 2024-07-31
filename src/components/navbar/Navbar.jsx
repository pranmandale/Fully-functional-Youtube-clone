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
            <div className='flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2'>

                <div className='flex items-center space-x-4 '>
                    {/* menubar and logo */}
                    <AiOutlineMenu className='text-xl cursor-pointer' />
                    <img src={logo} alt='' className='w-20 cursor-pointer' />
                </div>


                <div className=' flex w-[35%] items-center'>

                    <div className='w-[100%] px-4 py-2 border border-gray-400 rounded-l-full'>
                        <input
                            type='text'
                            placeholder='search'
                            className='outline-none'
                        />
                    </div>

                    <button className='px-4 py-2 bg-gray-100 border border-gray-400 rounded-r-full'>
                        <CiSearch size={"24px"} />
                    </button>

                    <IoMdMic size={"40px"} className='p-2 ml-3 duration-200 border rounded-full cursor-pointer hover:bg-gray-200'/>

                </div>



                <div className='flex items-center space-x-5 '>
                <RiVideoAddLine className='text-2xl'/>
                <AiOutlineBell className='text-2xl'/>
                <Avatar src={plogo} alt='' size={"32"} round={true}
                    className='cursor-pointer'
                />
                </div>
            </div>

        </>
    )
}

export default Navbar
