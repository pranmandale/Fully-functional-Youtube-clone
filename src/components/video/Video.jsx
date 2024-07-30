// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import Time from '../../loader/Time'
// // import { BsFillCheckCircleFill } from 'react-icons/bs'

// // function Video({ video }) {
// //     console.log(video)
// //     return (
// //         <div>
// //             {/* videoId is present in api */}
// //             {/* here we are using optional chaining bcoz if any of property we are not able to get the our applicaion does not crash */}
// //             <Link to={'/video/$(video?.videoId'}>
// //                 <div className='flex  flex-col'>
// //                     <div className='relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden'>
// //                         <img
// //                             className='h-full w-full'
// //                             src={video?.thumbnails[0]?.url} alt='' />
// //                         {

// //                             video?.lengthSeconds && <Time time={video?.lengthSeconds} />
// //                         }
// //                     </div>
// //                     {/* after thumbnail there is channel logo and title of video */}
// //                     <div className='flex mt-3 space-x-2 '>
// //                                 {/* channel logo */}
// //                         <div className='flex items-start'>
// //                             <div className='flex h-9 w-9 rounded-full overflow-hidden border'>
// //                                 <img
// //                                     className='h-full w-full rounded-full overflow-hidden'
// //                                     src={video?.author?.avatar[0].url} alt='' />
// //                             </div>
// //                         </div>
// //                         {/* this div is for title */}
// //                         <div>
// //                             <span className='text-sm font-bold line-clamp-2'>{video?.title}</span>

// //                             {/* channel name  */}
// //                             <span>
// //                             {video?.author?.title}
// //                             {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && {<BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]'/>}}
// //                             </span>
// //                         </div>
                        
// //                     </div>
// //                 </div>

// //             </Link>
// //         </div>
// //     )
// // }

// // export default Video

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Time from '../../loader/Time';
// import { BsFillCheckCircleFill } from 'react-icons/bs';

// function Video({ video }) {
//     console.log(video);
//     return (
//         <div>
//             {/* videoId is present in API */}
//             {/* Use optional chaining to prevent crashes if data is missing */}
//             <Link to={`/video/${video?.videoId}`}>
//                 <div className='flex flex-col'>
//                     <div className='relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden'>
//                         <img
//                             className='h-full w-full'
//                             src={video?.thumbnails[0]?.url}
//                             alt={video?.title || 'Video thumbnail'}
//                         />
//                         {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
//                     </div>
//                     {/* Channel logo and video title */}
//                     <div className='flex mt-3 space-x-2'>
//                         {/* Channel logo */}
//                         <div className='flex items-start'>
//                             <div className='flex h-9 w-9 rounded-full overflow-hidden border'>
//                                 <img
//                                     className='h-full w-full'
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
//                             <div className='flex items-center font-semibold mt-2'>
//                                 <span className='text-gray-600 text-sm'>
//                                     {video?.author?.title}
//                                 </span>
//                                 {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
//                                     <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />
//                                 )}

//                                 {/* time duration */}
//                                 <div>
//                                     <span>{`$(abbreviationNumber{
//                                     video?.stats?.views,2
//                                     }) views` }</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// }

// export default Video;



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
            {/* Use optional chaining to prevent crashes if data is missing */}
            <Link to={`/video/${video?.videoId}`}>
                <div className='flex flex-col'>
                    <div className='relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden'>
                        <img
                            className='h-full w-full'
                            src={video?.thumbnails[0]?.url}
                            alt={video?.title || 'Video thumbnail'}
                        />
                        {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
                    </div>
                    {/* Channel logo and video title */}
                    <div className='flex mt-3 space-x-2'>
                        {/* Channel logo */}
                        <div className='flex items-start'>
                            <div className='flex h-9 w-9 rounded-full overflow-hidden border'>
                                <img
                                    className='h-full w-full'
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
                            <div className='flex items-center font-semibold mt-2'>
                                <span className='text-gray-600 text-sm'>
                                    {video?.author?.title}
                                </span>
                                {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                                    <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />
                                )}
                            </div> 
                            {/* Views and other information */}
                            
                                <div className='flex text-gray-600 text-sm'>
                                <span>
                                    {`${abbreviateNumber(video?.stats?.views || 0)} views`}
                                </span>

                                {/* time of uploading of video */}
                                <span className='flex text-[24px] leading-none font-bold relative top-[-10px] px-1'>
                                    .
                                </span>

                                {/* time */}
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
