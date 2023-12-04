"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../redux/actions";
import VideoCard from "./VideoCart";
import MyLoader from "./Skeleton";
import Stadistics from "./Stadistics";


const Home = () => {
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
    <div className="mt-6 w-full  pb-6">
      <div className="my-8 ">
   
      <h1 className="text-3xl md:text-4xl  text-center text-gray-600 uppercase">
        Mis Rutinas de Ejercicios
      </h1>
      <Stadistics/>
      </div>
          
  
      {loading && <MyLoader/>}
     <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"> {!loading && ( 
        videos.length > 1 && 
        videos?.map((video) => <VideoCard video={video} key={video.id} />)
      )}
      </div>
    </div>
  );
};

export default Home;
