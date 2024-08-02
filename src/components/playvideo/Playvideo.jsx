
const abbreviateNumber = (num) => {
  if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + 'M';
  } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + 'K';
  } else {
      return num.toString();
  }
};
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchdata } from '../../utils/RapidAPI/Rapidapi.js';
import ReactPlayer from 'react-player';
import { BsFillCheckCircleFill } from 'react-icons/bs'; // Import for verified check icon


function Playvideo() {
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = async () => {
    try {
      const videoData = await fetchdata(`video/details/?id=${id}`);
      console.log('Fetched video data:', videoData);
      setVideo(videoData);
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="w-full max-w-[1580px] px-4">
        <div className="flex w-full lg:w-[70%] flex-col px-8 py-3 lg:py-6">
          <div className="relative w-full pb-[56.25%] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            {/* 16:9 aspect ratio */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height="100%"
              controls
              playing={true}
              className="absolute top-0 left-0"
              style={{ backgroundColor: "#000000" }}
            />
          </div>
          <div>
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>

            <div className="flex items-center mt-2 font-semibold">
              <span className="text-sm text-gray-600">
                {video?.author?.title}
              </span>
              {video?.author?.badges?.[0]?.type === 'VERIFIED_CHANNEL' && (
                <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
              )}
            </div>

            <div className="flex text-sm text-gray-600 mt-2">
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
      </div>
    </div>
  );
}

export default Playvideo;
