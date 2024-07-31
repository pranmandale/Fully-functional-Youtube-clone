// This page inclueds all the videos at home page which consist of thumbnails and title and time duration of video and views
// which inclued in this single page

// Utility function to abbreviate numbers
const abbreviateNumber = (num) => {
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + 'M';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + 'K';
    } else {
        return num.toString();
    }
};

import React from 'react';
import { Link } from 'react-router-dom';
import Time from '../../loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Video({ video }) {
    console.log(video);
    return (
        <div>
            {/* videoId is present in API */}
            {/* Use optional chaining method to prevent crashes if data is missing */}
            <Link to={`/video/${video?.videoId}`}>

            
                <div className='flex flex-col'>
                
                {/* thumbnail of video is taken from API */}
                    <div className='relative h-48 overflow-hidden duration-200 md:h-56 md:rounded-xl hover:rounded-none'>
                        <img
                            className='w-full h-full'
                            src={video?.thumbnails[0]?.url}
                            alt={video?.title || 'Video thumbnail'}
                        />
                        {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
                    </div>


                    
                    {/* Channel logo and video title which is present below the thumbnail*/}
                    <div className='flex mt-3 space-x-2'>
                        {/* Channel logo */}
                        <div className='flex items-start'>
                            <div className='flex overflow-hidden border rounded-full h-9 w-9'>
                                <img
                                    className='w-full h-full'
                                    src={video?.author?.avatar[0]?.url}
                                    alt={video?.author?.title || 'Channel logo'}
                                />
                            </div>
                        </div>

                        
                        {/* Title and channel name */}
                        <div>
                        
                            <span className='text-sm font-bold line-clamp-2'>
                                {video?.title}
                            </span>
                            
                            <div className='flex items-center mt-2 font-semibold'>
                            
                                <span className='text-sm text-gray-600'>
                                    {video?.author?.title}
                                </span>
                                
                                {
                                    video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                                    <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />
                                )
                                }
                                
                            </div> 
                            {/* Views and other information such as when the video is uploaded */}
                            {/* views */}
                                <div className='flex text-sm text-gray-600'>
                                
                                <span>
                                    {`${abbreviateNumber(video?.stats?.views || 0)} views`}
                                </span>

                                {/* it shows arrow between views and time */}
                                <span className='flex text-[24px] leading-none font-bold relative top-[-10px] px-1'>
                                    .
                                </span>

                                {/* time of uploading of video */}
                                <span>{video?.publishedTimeText}</span>
                                </div>
                           
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Video;
