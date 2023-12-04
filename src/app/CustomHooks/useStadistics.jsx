'use client'
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useState, useEffect } from "react";
import filterVideosByCurrentDay from "../libs/filterByCurrentDay";

const useStadistics = () => {

    const [loading, setLoading] = useState(true)
    const [totalVideos, setTotalVideos] = useState(null)
    const [newVideos, setNewVideos] = useState(null)

    const allVideos = useSelector((state) => state.allVideos);

    useEffect(() => {
      let timeoutId;
  
      if (allVideos.length !== 0) {
        const todayVideos = filterVideosByCurrentDay(allVideos);
        setTotalVideos(allVideos.length);
        setNewVideos(todayVideos.length);
        setLoading(false);
      } else {
        setLoading(true);
        timeoutId = setTimeout(() => {
          setTotalVideos(0);
          setNewVideos(0);
          setLoading(false);
        }, 3000);
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [allVideos]);

    
      
  return {
    totalVideos, loading, newVideos
  }
}

export default useStadistics
