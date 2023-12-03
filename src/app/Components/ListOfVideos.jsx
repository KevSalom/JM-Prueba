"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../redux/actions";
import VideoCard from "./VideoCart";
import MyLoader from "./Skeleton";


const ListOfVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.allVideos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(videos.length === 0){
      setLoading(true)
    dispatch(fetchVideos()).then(() => setLoading(false));
    } else{
      setLoading(false)
    }
  }, []);

  return (
    <div className="mt-6 w-full  ">
      {loading && <MyLoader/>}
     <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"> {!loading && ( 
        videos.length > 1 && 
        videos?.map((video) => <VideoCard video={video} key={video.id} />)
      )}
      </div>
    </div>
  );
};

export default ListOfVideos;
