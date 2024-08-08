import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../../utils/RapidAPI/Rapidapi.js";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
// import { abbreviateNumber } from "js-abbreviation-number";
import SuggestedVideo from "../suggestedvideo/SuggestedVideo.jsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

const abbreviateNumber = (num) => {
  if (num === undefined || num === null) {
    return '0';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
};

function PlayingVideo() {
  const [video, setVideo] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideo();
  }, [id]);

  const fetchVideoDetails = async () => {
    try {
      const res = await fetchdata(`video/details/?id=${id}`);
      console.log(res);
      setVideo(res);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  const fetchRelatedVideo = async () => {
    try {
      const res = await fetchdata(`video/related-contents/?id=${id}`);
      console.log(res);
      setRelatedVideo(res);
    } catch (error) {
      console.error("Error fetching related videos:", error);
    }
  };

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] mt-16">
      <div className="w-full max-w-[1180px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6">
          <div className="h-[200px] md:h-[450px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title || "Title not available"}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex ">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url || ""}
                    alt="Author Avatar"
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3">
                  <div className="text-md font-semibold flex items-center">
                    {video?.author?.title || "Author not available"}
                    {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className="text-sm">
                    {video?.author?.stats?.subscribersText || "Subscribers not available"}
                  </div>
                </div>
                <span className="mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200 ">
                  Subscribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.likes)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                {`${abbreviateNumber(video?.stats?.views)} Views`}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            {video?.description || "Description not available"}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-xl">
            {video?.stats?.comments || 0} <p>Comments</p>
          </div>
        </div>
        <div className="flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[440px]">
          {relatedVideo?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return <SuggestedVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
