// import React from 'react';
// import { Link } from 'react-router-dom';
// import { BsFillCheckCircleFill } from 'react-icons/bs'; // Correctly import the icon
//  import Time from '../../loader/Time.jsx'; // Ensure Time component is correctly imported

// const abbreviateNumber = (num) => {
//     if (num >= 1_000_000) {
//         return (num / 1_000_000).toFixed(1) + 'M';
//     } else if (num >= 1_000) {
//         return (num / 1_000).toFixed(1) + 'K';
//     } else {
//         return num.toString();
//     }
// };

// function SuggestedVideo({ video }) {
//     console.log(video);

//     return (
//         <div>
//             <Link to={`/video/${video?.videoId}`}>
//                 <div className='flex flex-col'>
//                     {/* Thumbnail */}
//                     <div className='relative h-24 xl:h-20 w-40 min-w-[160px] lg:w-32 lg:min-w-[128px] xl:w-[160px] overflow-hidden duration-200 md:h-20 md:rounded-xl hover:rounded-none'>
//                         <img
//                             className='w-full h-full'
//                             src={video?.thumbnails[0]?.url}
//                             alt={video?.title || 'Video thumbnail'}
//                         />
//                         {video?.lengthSeconds && <Time Time={video.lengthSeconds} />}
//                     </div>

//                     {/* Channel logo and video title */}
//                     <div className='flex mt-3 space-x-2'>
//                         {/* Channel logo */}
//                         <div className='flex items-start'>
//                             <div className='flex overflow-hidden border rounded-full h-9 w-9'>
//                                 <img
//                                     className='w-full h-full'
//                                     src={video?.author?.avatar[0]?.url}
//                                     alt={video?.author?.title || 'Channel logo'}
//                                 />
//                             </div>
//                         </div>

//                         {/* Title and channel name */}
//                         <div>
//                             <span className='text-sm font-bold line-clamp-2'>
//                                 {video?.title}
//                             </span>
//                             <div className='flex items-center mt-2 font-semibold'>
//                                 <span className='text-sm text-gray-600'>
//                                     {video?.author?.title}
//                                 </span>
//                                 {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
//                                     <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />
//                                 )}
//                             </div>
//                             {/* Views and other information */}
//                             <div className='flex text-sm text-gray-600'>
//                                 <span>
//                                     {`${abbreviateNumber(video?.stats?.views || 0)} views`}
//                                 </span>
//                                 <span className='flex text-[24px] leading-none font-bold relative top-[-10px] px-1'>
//                                     .
//                                 </span>
//                                 <span>{video?.publishedTimeText}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// }

// export default SuggestedVideo;


import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Time from '../../loader/Time.jsx';

const abbreviateNumber = (num) => {
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + 'M';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + 'K';
    } else {
        return num.toString();
    }
};

function SuggestedVideo({ video }) {
    console.log(video);

    return (
        <div>
            <Link to={`/video/${video?.videoId}`}>
                <div className='flex flex-col'>
                    {/* Thumbnail */}
                    <div className='relative h-24 xl:h-20 w-40 min-w-[160px] lg:w-32 lg:min-w-[128px] xl:w-[160px] overflow-hidden duration-200 md:h-20 md:rounded-xl hover:rounded-none'>
                        <img
                            className='w-full h-full'
                            src={video?.thumbnails[0]?.url}
                            alt={video?.title || 'Video thumbnail'}
                        />
                        {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
                    </div>

                    {/* Channel logo and video title */}
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
                                {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                                    <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />
                                )}
                            </div>
                            {/* Views and other information */}
                            <div className='flex text-sm text-gray-600'>
                                <span>
                                    {`${abbreviateNumber(video?.stats?.views || 0)} views`}
                                </span>
                                <span className='flex text-[24px] leading-none font-bold relative top-[-10px] px-1'>
                                    .
                                </span>
                                <span>{video?.publishedTimeText}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SuggestedVideo;
