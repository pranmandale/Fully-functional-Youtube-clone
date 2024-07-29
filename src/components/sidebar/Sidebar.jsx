import React from 'react'
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory, MdWatchLater } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from 'react-icons/gi';

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

    ]

    const sidebar2 = [
        {
            id: 1,
            name: "Your Channel",
            icon: <PiUserSquareThin />
        },
        {
            id: 2,
            name: "History",
            icon: <SiYoutubeshorts />
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
            icon: <GiLinkedRings />
        },

    ]
    const sidebar3 = [
        {
            id: 1,
            name: "Trending",
            icon: <PiUserSquareThin />
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
            icon: <GiLinkedRings />
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
            name: "fashion & beauty",
            icon: <PiLightbulbLight />
        },
        {
            id: 11,
            name: "Podcasts",
            icon: <MdPodcasts />
        },


    ]

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

    ]
    return (
        <div className='px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16'>

            {/* home */}
            <div className='space-y-3 items-center'>
                {
                    sidebar.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                                <div className='text-xl cursor-pointer'>{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <hr />

            {/* second section  */}
            <div className='mt-4 space-y-3 items-center'>
                <div className='flex items-center space-x-2'>
                    <h1>You</h1>
                    <FaChevronRight />
                </div>
                {
                    sidebar2.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                                <div className='text-xl cursor-pointer'>{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <hr />

            {/* third section */}
            <div className='mt-4 space-y-3 items-center'>
                <div className=' items-center space-x-2'>
                    <h1 className='font-semibold'>Explore</h1>

                </div>
                {
                    sidebar3.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                                <div className='text-xl cursor-pointer'>{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <hr />

            {/* fourth section */}
            <div className='mt-4 space-y-3 items-center'>
                <div className=' items-center space-x-2'>
                    <h1 className='font-semibold'>More From Youtube</h1>

                </div>
                {
                    sidebar4.map((item) => {
                        return (
                            <div className='flex items-center space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1'>
                                <div className='text-xl cursor-pointer text-red-700'>{item.icon}</div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <hr />
            <br/>
            <span className='text-xs font-semibold text-gray-500'>
                About Present Copyright<br/> Contact us Creator <br/>Advertise Developers <br/> <br/>
                <p>terms privacy & safety<br/> How youtube works <br/> test new features</p>
            </span>
            <br/>

            <p className='text-xs text-gray-600 mt-1'>© 2024 Pranav Mandale</p>
        </div>
    )
}

export default Sidebar
