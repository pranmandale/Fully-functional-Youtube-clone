
import React from 'react';
import Avatar from 'react-avatar';
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubestudio, SiYoutubekids, SiYoutubemusic, SiStylelint } from "react-icons/si";
import { MdOutlineSubscriptions, MdWatchLater, MdPodcasts, MdFeedback } from "react-icons/md";
import { PiUserSquareThin, PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight, FaYoutube, FaRegNewspaper } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TfiCup } from "react-icons/tfi";
import { CiSettings, CiFlag1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BiVideo } from "react-icons/bi";
import plogo from '../../assets/plogo.jpg';

import { AiOutlineMenu } from "react-icons/ai";

function Sidebar() {
    const sidebar = [
        {
            id: 1,
            name: "Home",
            icon: <GoHome />
        },
        {
            id: 2,
            name: "Shorts",
            icon: <SiYoutubeshorts />
        },
        {
            id: 3,
            name: "Subscription",
            icon: <MdOutlineSubscriptions />
        },
    ];

    const sidebar2 = [
        {
            id: 1,
            name: "Your Channel",
            icon: <PiUserSquareThin />
        },
        {
            id: 2,
            name: "History",
            icon: <MdWatchLater />
        },
        {
            id: 3,
            name: "Playlist",
            icon: <MdOutlineSubscriptions />
        },
        {
            id: 4,
            name: "Your Videos",
            icon: <BiVideo />
        },
        {
            id: 5,
            name: "Watch Later",
            icon: <MdWatchLater />
        },
        {
            id: 6,
            name: "Liked Videos",
            icon: <AiOutlineLike />
        },
    ];

    const sidebar3 = [
        {
            id: 1,
            name: "Trending",
            icon: <SiStylelint />
        },
        {
            id: 2,
            name: "Shopping",
            icon: <HiOutlineShoppingBag />
        },
        {
            id: 3,
            name: "Music",
            icon: <SiYoutubemusic />
        },
        {
            id: 4,
            name: "Films",
            icon: <PiFilmSlateLight />
        },
        {
            id: 5,
            name: "Live",
            icon: <MdWatchLater />
        },
        {
            id: 6,
            name: "Gaming",
            icon: <IoGameControllerOutline />
        },
        {
            id: 7,
            name: "News",
            icon: <FaRegNewspaper />
        },
        {
            id: 8,
            name: "Sports",
            icon: <TfiCup />
        },
        {
            id: 9,
            name: "Courses",
            icon: <SiStylelint />
        },
        {
            id: 10,
            name: "Fashion & Beauty",
            icon: <PiLightbulbLight />
        },
        {
            id: 11,
            name: "Podcasts",
            icon: <MdPodcasts />
        },
    ];

    const sidebar4 = [
        {
            id: 1,
            name: "Youtube Premium",
            icon: <FaYoutube />
        },
        {
            id: 2,
            name: "Youtube Studio",
            icon: <SiYoutubestudio />
        },
        {
            id: 3,
            name: "Youtube Music",
            icon: <SiYoutubemusic />
        },
        {
            id: 4,
            name: "Youtube Kids",
            icon: <SiYoutubekids />
        },
    ];

    const sidebar5 = [
        {
            id: 1,
            name: "Settings",
            icon: <CiSettings />
        },
        {
            id: 2,
            name: "Report History",
            icon: <CiFlag1 />
        },
        {
            id: 3,
            name: "Help",
            icon: <IoIosHelpCircleOutline />
        },
        {
            id: 4,
            name: "Send Feedback",
            icon: <MdFeedback />
        },
    ];

    const sidebar6 = [
        {
            id: 1,
            name: "Pranav Mandale",
            icon: <Avatar src={plogo} size="30" round={true} />
        },
        {
            id: 2,
            name: "All Subscritions",
            icon: <AiOutlineMenu />
        },
        
    ];

    return (
        <div className='px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16'>
            {/* home */}
            <div className='space-y-3 items-center'>
                {sidebar.map((item) => (
                    <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 rounded-xl p-1'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div>
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                ))}
            </div>
            <br />
            <hr />

            {/* second section */}
            <div className='mt-4 space-y-3 items-center'>
                <div className='flex items-center space-x-2'>
                    <h1>You</h1>
                    <FaChevronRight />
                </div>
                {sidebar2.map((item) => (
                    <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div>
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                ))}
            </div>
            <br />
            <hr />

            {/* third section */}
            <div className='mt-4 space-y-3 items-center'>
                <div className='items-center space-x-2'>
                    <h1 className='font-semibold'>Subscription</h1>
                </div>
                {sidebar6.map((item) => (
                    <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div>
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                ))}
            </div>
            <br />
            <hr />

            {/* fourth section */}
            <div className='mt-4 space-y-3 items-center'>
                <div className='items-center space-x-2'>
                    <h1 className='font-semibold'>Explore</h1>
                </div>
                {sidebar3.map((item) => (
                    <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div>
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                ))}
            </div>
            <br />
            <hr />

            {/* fifth section */}
            <div className='mt-4 space-y-3 items-center'>
                <div className='items-center space-x-2'>
                    <h1 className='font-semibold'>More From Youtube</h1>
                </div>
                {sidebar4.map((item) => (
                    <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                        <div className='text-xl cursor-pointer text-red-700'>{item.icon}</div>
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                ))}
            </div>
            <br />
            <hr />

            {/* sixth section */}
            <div className='mt-4 space-y-3 items-center'>
                {sidebar5.map((item) => (
                    <div key={item.id} className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                        <div className='text-xl cursor-pointer'>{item.icon}</div>
                        <span className='cursor-pointer'>{item.name}</span>
                    </div>
                ))}
            </div>
            <br />
            <hr />
            <br />

            {/* text section */}
            <span className='text-xs font-semibold text-gray-500'>
                About Present Copyright<br /> Contact us Creator <br />Advertise Developers <br /><br />
                <p>terms privacy & safety<br /> How youtube works <br /> test new features</p>
            </span>
            <br />

            <p className='text-xs text-gray-600 mt-1'>© 2024 Pranav Mandale</p>
        </div>
    );
}

export default Sidebar;
