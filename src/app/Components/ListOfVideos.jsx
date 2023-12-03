"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../redux/actions";
import VideoCard from "./VideoCart";

const ListOfVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.allVideos);

  useEffect(() => {
    if (videos.length === 0) {
      dispatch(fetchVideos());
    }
  }, []);
  
  return (
    <div className="mt-6 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
      {videos.length > 1 &&
        videos?.map((video) => <VideoCard video={video} key={video.id} />)}
    </div>
  );
};

export default ListOfVideos;
