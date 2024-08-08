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
    return (
        <div>
            <Link to={`/video/${video?.videoId}`}>
                <div className="flex mb-3 space-x-2">
                    {/* Thumbnail */}
                    <div className="relative h-24 xl:h-20 w-48 min-w-[165px] max-w-[165px] lg:w-40 lg:min-w-[165px] lg:max-w-[165px] xl:w-[165px] overflow-hidden duration-200 md:h-20 md:rounded-xl hover:rounded-none">
                        <img
                            className="w-full h-full rounded-lg object-cover"
                            src={video?.thumbnails[0]?.url}
                            alt={video?.title || 'Video thumbnail'}
                        />
                        {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
                    </div>

                    {/* Channel logo and video title */}
                    <div className="flex flex-col justify-start w-full">
                        {/* Title */}
                        <span className="text-sm font-bold line-clamp-2">
                            {video?.title}
                        </span>
                        <div className="flex items-center mt-2 font-semibold">
                            {/* Channel name */}
                            <span className="text-sm text-gray-600">
                                {video?.author?.title}
                            </span>
                            {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                                <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                            )}
                        </div>
                        {/* Views and published time */}
                        <div className="flex text-sm text-gray-600">
                            <span>
                                {`${abbreviateNumber(video?.stats?.views || 0)} views`}
                            </span>
                            <span className="flex text-[24px] leading-none font-bold relative top-[-10px] px-1">
                                .
                            </span>
                            <span>{video?.publishedTimeText}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SuggestedVideo;
